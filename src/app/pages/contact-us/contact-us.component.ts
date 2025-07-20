import { Component, OnInit, inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

import emailjs from 'emailjs-com';

import { environment } from '@environments';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  private fb: FormBuilder = inject(FormBuilder);
  public contactForm: FormGroup | undefined;
  public showPopup: boolean = false;
  public popupText: string = '';

  private EMAIL_SERVICE_ID: string = environment.EMAIL_SERVICE_ID;
  private EMAIL_TEMPLATE_ID: string = environment.EMAIL_TEMPLATE_ID;
  private EMAIL_PUBLIC_KEY: string = environment.EMAIL_PUBLIC_KEY;

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      message: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.contactForm) {
      Object.values(this.contactForm.controls).forEach((control: AbstractControl<any, any>) => {
        control.markAsTouched();
      });

      if (!this.contactForm?.valid) return;
      const formData = this.contactForm.value;

      emailjs
        .send(
          this.EMAIL_SERVICE_ID,
          this.EMAIL_TEMPLATE_ID,
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            message: formData.message
          },
          this.EMAIL_PUBLIC_KEY
        )
        .then(() => {
          this.showPopup = true;
          this.popupText = 'COMMON.POPUP.SUCCESS_TEXT';
          this.contactForm?.reset();
        })
        .catch((error) => {
          this.showPopup = true;
          this.popupText = 'COMMON.POPUP.FAILURE_TEXT';
        });
    }
  }

  public allFieldsTouched(): boolean {
    if (!this.contactForm) return false;
    const controls: any = this.contactForm.controls;
    return Object.keys(controls).every((key: string) => controls[key].touched);
  }
}
