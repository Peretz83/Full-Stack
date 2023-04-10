import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/api.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
   loginForm = new FormGroup({
        email: new FormControl('', {
            validators: [Validators.required, Validators.email]
        }),
        password: new FormControl('', {
            validators: [Validators.required, Validators.minLength(6)]
        })
    })
    constructor(private api:ApiService, private router:Router){

    }
onSubmit() {
    if(this.loginForm.invalid){
      return;
    }

    this.api.login(this.loginForm.value).subscribe({
      next: (data) => { 

         if (data.token) this.api.setToken(data.token)

          this.router.navigate(['dashboard']);
      


      },
      error: (err) => {
        console.log(err.error)
     

      }
    })
  }

       getFieldControl(field: string): FormControl {
        return this.loginForm.get(field) as FormControl;
    }
      }
