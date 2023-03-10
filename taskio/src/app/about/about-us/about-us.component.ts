import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent {

   
 @ViewChild('nameFieldRef') nameField!: ElementRef;

  contactForm = new FormGroup({
    name: new FormControl("",{
      validators:[Validators.required, Validators.minLength(2), Validators.maxLength(10)]
    }),
    email: new FormControl("",{
      validators:[Validators.required,Validators.email]
    }),
     message: new FormControl("",{
         validators:[Validators.required, Validators.maxLength(300)]
     })
  })

  ngAfterViewInit(): void {
    this.nameField.nativeElement.focus();
  }

  getFieldControl(field: string): FormControl{
    return this.contactForm.get(field) as FormControl
  }

 onSubmit(){
  if(this.contactForm.invalid){
    return 
  }
  this.contactForm.reset()
  
 }



}

 