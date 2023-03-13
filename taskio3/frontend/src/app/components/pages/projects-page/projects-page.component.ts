import { Component } from '@angular/core';

interface ProjectsType{
  img: string
  title: string
  description: string

}
@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.css']
})
export class ProjectsPageComponent {

projects: ProjectsType[] =[


  {
    img:"",
    title: "Project 1",
    description:"My first project"
  },
  {
    img:"",
    title: "Project 2",
    description:"My second project"
  },
  {
    img:"",
    title: "Project 3",
    description:"My third project"
  }


] 
}

