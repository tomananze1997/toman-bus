import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentAboutUsComponent } from './content-about-us.component';

describe('ContentAboutUsComponent', () => {
  let component: ContentAboutUsComponent;
  let fixture: ComponentFixture<ContentAboutUsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContentAboutUsComponent]
    });
    fixture = TestBed.createComponent(ContentAboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
