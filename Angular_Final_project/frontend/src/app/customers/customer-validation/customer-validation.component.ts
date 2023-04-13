import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-customer-validation',
  templateUrl: './customer-validation.component.html',
  styleUrls: ['./customer-validation.component.css']
})
export class CustomerValidationComponent {
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
            return `Field cannot be longer than ${maxlengthErr.requiredLength}`;
        }

        const minlengthErr = control.getError('minlength');
        if (minlengthErr) {
            return `Field cannot be shorter than ${minlengthErr.requiredLength}`;
        }

        if (control.getError('email')) {
            return 'Email is not valid';
        }

        return '';
    }
}
