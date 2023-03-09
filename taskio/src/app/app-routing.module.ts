import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about/about-us/about-us.component';
import { LoginPageComponent } from './auth/login-page/login-page.component';
import { SignupPageComponent } from './auth/signup-page/signup-page.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { ProjectPageComponent } from './projects/project-page/project-page.component';

const routes: Routes = [
  {path: 'home', component: HomePageComponent },
  {path: 'projects', component: ProjectPageComponent },
  {path: 'about-us', component: AboutUsComponent },
  {path: '', redirectTo:'/home', pathMatch:'full'},
  {path: 'register', component: SignupPageComponent },
  {path: 'login', component: LoginPageComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
