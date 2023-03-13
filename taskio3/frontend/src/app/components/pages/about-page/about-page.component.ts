import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent {

  contactForm = new FormGroup ({
    name: new FormControl("",{
      validators:[Validators.required,Validators.minLength(2), Validators.maxLength(10)]
    }),
    email: new FormControl("",{
      validators:[Validators.required,Validators.email]
    }),
    message: new FormControl("",{
      validators:[Validators.required,Validators.maxLength(300)]
    })
  })
onSubmit(){
 if(this.contactForm.invalid){
    return 
  }
  this.contactForm.reset()
   
}

 getFieldControl(field:string):FormControl{
  return this.contactForm.get(field) as FormControl
  }
}
