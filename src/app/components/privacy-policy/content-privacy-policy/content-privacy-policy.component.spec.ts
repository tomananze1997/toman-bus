import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentPrivacyPolicyComponent } from './content-privacy-policy.component';

describe('ContentComponent', () => {
  let component: ContentPrivacyPolicyComponent;
  let fixture: ComponentFixture<ContentPrivacyPolicyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContentPrivacyPolicyComponent]
    });
    fixture = TestBed.createComponent(ContentPrivacyPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
