import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomePageComponent } from './home/home-page/home-page.component';
import { TaskPageComponent } from './tasks/task-page/task-page.component';

const routes: Routes = [
  {path:"",component:HomePageComponent},
  {path:"tasks",component:TaskPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
