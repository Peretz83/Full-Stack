import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { ButtonComponent } from './button/button.component';
import { SectionTitleComponent } from './section-title/section-title.component';
import { ProjectCardComponent } from '../projects/project-card/project-card.component';
import { ProjectsModule } from '../projects/projects.module';


@NgModule({
  declarations: [
    ButtonComponent,
    SectionTitleComponent,
    HomePageComponent
  ],
  imports: [
    CommonModule,
    ProjectsModule
  ],
  exports:[
    SectionTitleComponent,
    HomePageComponent,
    ProjectCardComponent
  ]
})
export class HomeModule { }
