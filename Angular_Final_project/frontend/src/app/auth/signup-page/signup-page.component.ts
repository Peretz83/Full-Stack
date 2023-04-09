import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent {
     signupForm = new FormGroup({
        name: new FormControl('', {
            validators: [Validators.required, Validators.minLength(2), Validators.maxLength(20)]
        }),
        email: new FormControl('', {
            validators: [Validators.required, Validators.email]
        }),
        password: new FormControl('', {
            validators: [Validators.required, Validators.minLength(6)]
        }),
        confirmPassword: new FormControl('', {
            validators: [Validators.required, Validators.minLength(6)]
        })
    })
 onSubmit() {
        if (this.signupForm.invalid) {
            return;
        }
      }

       getFieldControl(field: string): FormControl {
        return this.signupForm.get(field) as FormControl;
    }

}
