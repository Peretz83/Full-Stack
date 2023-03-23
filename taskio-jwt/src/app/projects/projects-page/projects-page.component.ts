import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Project } from 'src/app/app.component';
import { ApiService } from 'src/app/core/api.service';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.css']
})
export class ProjectsPageComponent {

      projects: Array<Project> = []
  allStatuses = ["PLANNED","IN-PROGRESS","DONE"]

  addProjectForm = new FormGroup({
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
        }),
        status: new FormControl('', {
            validators: [
                Validators.minLength(3),
               
            ]
        })
    })

    constructor(private api:ApiService){

    }
  ngOnInit(): void {
   this.getProjects()
  }

     getProjects() {
        this.api.getProjects().subscribe({
            next: (data: Array<Project>) => {
                this.projects = data;
            },
            error: (err) => console.log(err)
        })
    }


    onSubmit(){
      if(this.addProjectForm.invalid){
        return;
        
      }
     this.api.addProject(this.addProjectForm.value).subscribe({
      next:(data:Project)=>{
        this.getProjects()
      },
      error:(err)=> console.log(err)
      
     })
      
    }

     onDelete(project: Project) {
        if (!project._id) {
            return;
        }

        this.api.deleteProject(project._id).subscribe({
            next: (data: Project) => {
                this.getProjects();
            },
            error: (err) => console.log(err)
        })
    }

}
