import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-field-validation',
  templateUrl: './field-validation.component.html',
  styleUrls: ['./field-validation.component.css']
})
export class FieldValidationComponent {

  @Input() formField?: FormControl<any>;

    fieldErr(): string {
        const control = this.formField;
        if (
            !control ||
            !control.errors ||
            !control.dirty ||
            !control.touched
        ) {
            return '';
        }

        if (control.getError('required')) {
            return 'This field is required';
        }

        const maxlengthErr = control.getError('maxlength');
        if (maxlengthErr) {
            return `Field cannot be longer than ${maxlengthErr.requiredLength} characters`;
        }

        const minlengthErr = control.getError('minlength');
        if (minlengthErr) {
            return `Field cannot be shorter than ${minlengthErr.requiredLength} characters`;
        }

        if (control.getError('email')) {
            return 'Email is not valid';
        }

        return '';
    }
}
