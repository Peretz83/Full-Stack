import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-lecturer-page',
  templateUrl: './lecturer-page.component.html',
  styleUrls: ['./lecturer-page.component.scss']
})
export class LecturerPageComponent {

  addLecturerForm = new FormGroup({
        title: new FormControl('', {
            validators: [
                Validators.required,
                Validators.minLength(2),
                Validators.maxLength(256)
            ]
        }),
        description: new FormControl('', {
            validators: [
                Validators.minLength(2),
                Validators.maxLength(1024)
            ]
        })
    })
onSubmit(){
  
}
}
