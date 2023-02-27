import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from './project-card/project-card.component';
import { ProjectPageComponent } from './project-page/project-page.component';


@NgModule({
  declarations: [
    ProjectPageComponent,
    ProjectCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProjectPageComponent,
    ProjectCardComponent
  ]
})
export class ProjectsModule { }
