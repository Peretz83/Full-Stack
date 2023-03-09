import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent {
  title = "It worked"
registerForm = new FormGroup({
  name: new FormControl("",{
    validators:[Validators.required,Validators.minLength(6)]
  }),
  email: new FormControl("",{
    validators:[Validators.required,Validators.email]
  }),
  password: new FormControl("",{
    validators:[Validators.required,Validators.minLength(6)]
  })
})
onSubmit(){
    if(this.registerForm.invalid){
    return 
  }
 this.registerForm.reset()
 console.log(this.registerForm);
 
 
  
 }

}



