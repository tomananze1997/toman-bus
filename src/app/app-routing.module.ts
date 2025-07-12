import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutUsComponent, ContactUsComponent, HomepageComponent, PrivacyPolicyComponent, TOSComponent } from '@pages';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'contact-us',
    component: ContactUsComponent
  },
  {
    path: 'about-us',
    component: AboutUsComponent
  },
  {
    path: 'privacy-policy',
    component: PrivacyPolicyComponent
  },
  {
    path: 'terms-conditions',
    component: TOSComponent
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      onSameUrlNavigation: 'reload',
      scrollOffset: [0, 50]
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
