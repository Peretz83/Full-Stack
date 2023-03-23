import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './auth/login-page/login-page.component';
import { SignupPageComponent } from './auth/signup-page/signup-page.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { ProjectsPageComponent } from './projects/projects-page/projects-page.component';

const routes: Routes = [
  {path:"home",component:HomePageComponent},
  {path:"signup",component:SignupPageComponent},
  {path:"login",component:LoginPageComponent},
  {path:"projects",component:ProjectsPageComponent},
  
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
