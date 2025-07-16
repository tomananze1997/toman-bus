import { Component } from '@angular/core';

import { IPrivacyContent } from '@interfaces';

@Component({
  selector: 'app-content-privacy-policy',
  templateUrl: './content-privacy-policy.component.html',
  styleUrls: ['./content-privacy-policy.component.css']
})
export class ContentPrivacyPolicyComponent {
  public content: IPrivacyContent[] = [
    {
      titleKey: 'PRIVACY_POLICY.SECTION_TITLE_FIRST',
      contentKey: 'PRIVACY_POLICY.SECTION_CONTENT_FIRST'
    },
    {
      titleKey: 'PRIVACY_POLICY.SECTION_TITLE_SECOND',
      contentKey: 'PRIVACY_POLICY.SECTION_CONTENT_SECOND'
    },
    {
      titleKey: 'PRIVACY_POLICY.SECTION_TITLE_THIRD',
      contentKey: 'PRIVACY_POLICY.SECTION_CONTENT_THIRD'
    },
    {
      titleKey: 'PRIVACY_POLICY.SECTION_TITLE_FORTH',
      contentKey: 'PRIVACY_POLICY.SECTION_CONTENT_FORTH'
    },
    {
      titleKey: 'PRIVACY_POLICY.SECTION_TITLE_FIFTH',
      contentKey: 'PRIVACY_POLICY.SECTION_CONTENT_FIFTH'
    },
    {
      titleKey: 'PRIVACY_POLICY.SECTION_TITLE_SIXTH',
      contentKey: 'PRIVACY_POLICY.SECTION_CONTENT_SIXTH'
    },
    {
      titleKey: 'PRIVACY_POLICY.SECTION_TITLE_SEVENTH',
      contentKey: 'PRIVACY_POLICY.SECTION_CONTENT_SEVENTH'
    }
  ];
}
