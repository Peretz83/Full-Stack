import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from './project-card/project-card.component';
import { ProjectPageComponent } from './project-page/project-page.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        ProjectCardComponent,
        ProjectPageComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    exports: [
        ProjectCardComponent,
        ProjectPageComponent,
    ]
})
export class ProjectsModule { }
