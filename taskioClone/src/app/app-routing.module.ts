import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './about/about-page/about-page.component';
import { LoginPageComponent } from './auth/login-page/login-page.component';
import { SignupPageComponent } from './auth/signup-page/signup-page.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { ProjectPageComponent } from './projects/project-page/project-page.component';
import { TaskPageComponent } from './tasks/task-page/task-page.component';

const routes: Routes = [
    { path: 'home', component: HomePageComponent },
    { path: 'projects', component: ProjectPageComponent },
    { path: 'about', component: AboutPageComponent },
    { path: 'signup', component: SignupPageComponent },
    { path: 'login', component: LoginPageComponent },
    { path: 'tasks', component: TaskPageComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
