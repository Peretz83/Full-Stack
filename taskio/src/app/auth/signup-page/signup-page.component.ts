import { AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { LoggerService } from 'src/app/core/logger.service';


@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent implements AfterViewInit {
  
  constructor(private loger: LoggerService) {}

  @ViewChild('nameFieldRef') nameField!: ElementRef;

  signupForm = new FormGroup({
    name: new FormControl("",{
      validators:[Validators.required, Validators.minLength(2), Validators.maxLength(10)]
    }),
    email: new FormControl("",{
      validators:[Validators.required,Validators.email]
    }),
     password: new FormControl("",{
         validators:[Validators.required, Validators.minLength(6)]
     })
  })

  ngAfterViewInit(): void {
    this.loger.log('ngAfterViewInit')
    this.nameField.nativeElement.focus();
  }

  getFieldControl(field: string): FormControl{
    return this.signupForm.get(field) as FormControl
  }

 onSubmit(){
  if(this.signupForm.invalid){
    return 
  }
  this.signupForm.reset()
  
 }







   
}
