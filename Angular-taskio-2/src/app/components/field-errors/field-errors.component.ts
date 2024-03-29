import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-field-errors',
  templateUrl: './field-errors.component.html',
  styleUrls: ['./field-errors.component.scss']
})
export class FieldErrorsComponent {
  @Input()formField?: FormControl<any>
fieldErr():string{
  const control = this.formField
    if(
      !control ||
      !control.errors ||
      !control.dirty ||
      !control.touched
    ){
      return '';
    }

    if(control.getError('required')){
      return 'This field is required';
    }

    const maxlengthErr = control.getError('maxlength');
    if(maxlengthErr){
      return `Name cannot be longer than ${maxlengthErr.requiredLength}`;
    }

    const minlengthErr = control.getError('minlength');
    if(minlengthErr){
      return `Field cannot be shorter than ${minlengthErr.requiredLength}`;
    }
    if(control.getError('email')){
      return 'Email is not valid'
    }

    return '';
    
  }

}

