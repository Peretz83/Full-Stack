
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent {

  contactForm = new FormGroup({
    name: new FormControl("",{
      validators:[Validators.required,Validators.minLength(2)]
    }),
    email: new FormControl("",{
      validators:[Validators.required,Validators.email]
    }),
    message: new FormControl("",{
      validators:[Validators.required,Validators.maxLength(300)]
    })
  })

  submit(){
   if(this.contactForm.invalid){
    return 
   }
   this.contactForm.reset() 
   console.log(this.contactForm);
   
  
   
  }
    getFieldControl(field: string): FormControl{
    return this.contactForm.get(field) as FormControl
  }

}
