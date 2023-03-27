import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './about/about-page/about-page.component';
import { LoginPageComponent } from './auth/login-page/login-page.component';
import { SignupPageComponent } from './auth/signup-page/signup-page.component';
import { AuthService } from './core/auth.service';
import { HomePageComponent } from './home/home-page/home-page.component';
import { ProjectPageComponent } from './projects/project-page/project-page.component';
import { TaskPageComponent } from './tasks/task-page/task-page.component';

const routes: Routes = [
    { path: 'home', component: HomePageComponent },
    { path: 'about', component: AboutPageComponent },
    { path: 'signup', component: SignupPageComponent },
    { path: 'login', component: LoginPageComponent },
    {
        path: '',
        // redirectTo: '/home',
        // pathMatch: 'full',
        canActivateChild: [AuthService],
        children: [
            { path: 'projects', component: ProjectPageComponent },
            { path: 'tasks', component: TaskPageComponent, },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
