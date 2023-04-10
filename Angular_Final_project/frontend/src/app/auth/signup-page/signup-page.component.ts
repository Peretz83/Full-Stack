import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/api.service';

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
        confirm_password: new FormControl('', {
            validators: [Validators.required, Validators.minLength(6)]
        })
    })

    constructor(private api:ApiService, private router:Router){
        
    }

  onSubmit() {
    if(this.signupForm.invalid){
      return;
    }

    this.api.signup(this.signupForm.value).subscribe({
      next: (data) => {

        
          this.router.navigate(['/']);
      


      },
      error: (err) => {
        console.log(err.error)
     

      }
    })
  }

       getFieldControl(field: string): FormControl {
        return this.signupForm.get(field) as FormControl;
    }

}
