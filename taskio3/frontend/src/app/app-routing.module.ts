import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './components/pages/about-page/about-page.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { ProjectsPageComponent } from './components/pages/projects-page/projects-page.component';

const routes: Routes = [
  {path:"",component:HomePageComponent},
  {path:"about",component:AboutPageComponent},
  {path:"login",component:LoginPageComponent},
  {path:"projects",component:ProjectsPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
