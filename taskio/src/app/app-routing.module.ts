import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about/about-us/about-us.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { ProjectPageComponent } from './projects/project-page/project-page.component';

const routes: Routes = [
  {path: 'home', component: HomePageComponent },
  {path: 'projects', component: ProjectPageComponent },
  {path: 'about-us', component: AboutUsComponent },
  {path: '', redirectTo:'/home', pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
