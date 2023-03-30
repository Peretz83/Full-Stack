import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/core/api.service';
import { iLecturer } from 'src/app/shared/interfaces/lecturerType';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
    experienceOptions = ["1","2","3","4","5","6","7","8","9","10"]
   addLecturerForm = new FormGroup({
        fName: new FormControl('', {
            validators: [
                Validators.required,
                Validators.minLength(2),
                Validators.maxLength(100)
            ]
        }),
        lName: new FormControl('', {
            validators: [
                Validators.minLength(2),
                Validators.maxLength(100),
                Validators.required
            ]
        }),
        email: new FormControl('', {
            validators: [
                Validators.email,
                Validators.required
            ]
        }),
        phone: new FormControl('', {
            validators: [
                Validators.minLength(6),
                Validators.maxLength(250)
            ]
        }),
        start_date: new FormControl('', {
            validators: [
                Validators.required
            ]
        })
    })
    constructor(private api:ApiService ){

    }
onSubmit(){
   if (this.addLecturerForm.invalid) {
            return;
        }

        this.api.addLecturer(this.addLecturerForm.value).subscribe({
            next: (data: iLecturer) => {
                this.addLecturerForm.reset();
                // this.getTasks();
            },
            error: (err) => console.log(err)
        })
  
}

}
