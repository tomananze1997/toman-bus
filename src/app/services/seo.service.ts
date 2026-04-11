import { DOCUMENT } from '@angular/common';
import { DestroyRef, Injectable, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Meta, Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';

import { TranslateService } from '@ngx-translate/core';
import { merge } from 'rxjs';
import { filter } from 'rxjs/operators';

import { environment } from '@environments';

type SeoPageKey = 'HOME' | 'ABOUT_US' | 'CONTACT_US' | 'PRIVACY_POLICY';

const LANG_CODES = ['en', 'sl', 'de'] as const;

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly translate = inject(TranslateService);
  private readonly router = inject(Router);
  private readonly document = inject(DOCUMENT);
  private readonly destroyRef = inject(DestroyRef);

  private initialized = false;

  init(): void {
    if (this.initialized) {
      return;
    }
    this.initialized = true;

    merge(
      this.router.events.pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd)),
      this.translate.onLangChange
    )
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => this.applyFromRouter());

    this.applyFromRouter();
  }

  private applyFromRouter(): void {
    const segments: string[] = this.router.url.split('?')[0].split('/').filter(Boolean);
    if (segments.length === 0) {
      return;
    }

    const lang = LANG_CODES.includes(segments[0] as (typeof LANG_CODES)[number]) ? segments[0] : 'en';
    this.document.documentElement.setAttribute('lang', lang);

    const pageKey = this.resolvePageKey(segments);
    this.translate
      .get([
        'SEO.SITE_NAME',
        `SEO.${pageKey}.TITLE`,
        `SEO.${pageKey}.DESCRIPTION`,
        'SEO.OG_LOCALE',
        'SEO.OG_IMAGE'
      ])
      .subscribe((t: Record<string, string>) => {
        const siteName = t['SEO.SITE_NAME'] ?? 'Toman Bus';
        const titleKey = `SEO.${pageKey}.TITLE`;
        const descKey = `SEO.${pageKey}.DESCRIPTION`;
        const pageTitle = t[titleKey] ?? siteName;
        const description = t[descKey] ?? '';
        const ogLocale = t['SEO.OG_LOCALE'] ?? 'en_US';
        const ogImageRaw = (t['SEO.OG_IMAGE'] ?? '').trim();

        const fullTitle = `${pageTitle} | ${siteName}`;
        this.title.setTitle(fullTitle);
        this.meta.updateTag({ name: 'description', content: description });
        this.meta.updateTag({ name: 'robots', content: 'index, follow' });

        const base = this.canonicalBase();
        const canonicalUrl = `${base}/${lang}${this.pathSuffix(segments)}`;
        this.setLinkHref('canonical', canonicalUrl);

        this.meta.updateTag({ property: 'og:type', content: 'website' });
        this.meta.updateTag({ property: 'og:title', content: fullTitle });
        this.meta.updateTag({ property: 'og:description', content: description });
        this.meta.updateTag({ property: 'og:url', content: canonicalUrl });
        this.meta.updateTag({ property: 'og:locale', content: ogLocale });
        this.meta.updateTag({ property: 'og:site_name', content: siteName });

        const imageUrl = this.absoluteAssetUrl(base, ogImageRaw);
        if (imageUrl) {
          this.meta.updateTag({ property: 'og:image', content: imageUrl });
          this.meta.updateTag({ name: 'twitter:image', content: imageUrl });
        } else {
          this.meta.removeTag("property='og:image'");
          this.meta.removeTag("name='twitter:image'");
        }

        this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
        this.meta.updateTag({ name: 'twitter:title', content: fullTitle });
        this.meta.updateTag({ name: 'twitter:description', content: description });

        this.syncHreflang(base, segments);
        this.syncJsonLd(`${base}/en`, siteName, description);
      });
  }

  private canonicalBase(): string {
    const fromEnv = environment.siteUrl?.trim() ?? '';
    if (fromEnv) {
      return fromEnv.replace(/\/$/, '');
    }
    if (typeof window !== 'undefined' && window.location?.origin) {
      return window.location.origin.replace(/\/$/, '');
    }
    return '';
  }

  private absoluteAssetUrl(base: string, path: string): string {
    if (!path || !base) {
      return '';
    }
    return path.startsWith('http') ? path : `${base}${path.startsWith('/') ? '' : '/'}${path}`;
  }

  private pathSuffix(segments: string[]): string {
    const rest = segments.slice(1);
    return rest.length ? `/${rest.join('/')}` : '';
  }

  private resolvePageKey(segments: string[]): SeoPageKey {
    const first = segments[1];
    switch (first) {
      case 'about-us':
        return 'ABOUT_US';
      case 'contact-us':
        return 'CONTACT_US';
      case 'privacy-policy':
        return 'PRIVACY_POLICY';
      default:
        return 'HOME';
    }
  }

  private head(): HTMLHeadElement | null {
    return this.document.getElementsByTagName('head')[0] ?? null;
  }

  private setLinkHref(rel: string, href: string): void {
    const head = this.head();
    if (!head || !href) {
      return;
    }
    const selector = `link[rel="${rel}"]`;
    let el = this.document.querySelector<HTMLLinkElement>(selector);
    if (!el) {
      el = this.document.createElement('link');
      el.setAttribute('rel', rel);
      head.appendChild(el);
    }
    el.setAttribute('href', href);
  }

  private syncHreflang(base: string, segments: string[]): void {
    const head = this.head();
    if (!head || !base) {
      return;
    }
    this.document.querySelectorAll('link[data-seo-hreflang="1"]').forEach((n) => n.remove());

    const suffix = this.pathSuffix(segments);
    for (const code of LANG_CODES) {
      const link = this.document.createElement('link');
      link.setAttribute('rel', 'alternate');
      link.setAttribute('hreflang', code);
      link.setAttribute('href', `${base}/${code}${suffix}`);
      link.setAttribute('data-seo-hreflang', '1');
      head.appendChild(link);
    }
    const x = this.document.createElement('link');
    x.setAttribute('rel', 'alternate');
    x.setAttribute('hreflang', 'x-default');
    x.setAttribute('href', `${base}/en${suffix}`);
    x.setAttribute('data-seo-hreflang', '1');
    head.appendChild(x);
  }

  private syncJsonLd(organizationUrl: string, siteName: string, description: string): void {
    const head = this.head();
    if (!head) {
      return;
    }
    this.document.getElementById('seo-org-jsonld')?.remove();

    const script = this.document.createElement('script');
    script.id = 'seo-org-jsonld';
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Toman d.o.o.',
      alternateName: siteName,
      url: organizationUrl,
      description,
      telephone: '+38641720655',
      email: 'toman.bus@gmail.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Posavec 131',
        addressLocality: 'Podnart',
        postalCode: '4244',
        addressCountry: 'SI'
      },
      sameAs: ['https://www.facebook.com/avtobusni.toman']
    });
    head.appendChild(script);
  }
}
