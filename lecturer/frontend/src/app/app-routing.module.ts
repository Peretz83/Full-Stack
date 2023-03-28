import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home/home-page/home-page.component';
import { LecturerPageComponent } from './lecturer/lecturer-page/lecturer-page.component';


const routes: Routes = [
  {path:"",component:HomePageComponent},
  {path:"lecturers",component:LecturerPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
