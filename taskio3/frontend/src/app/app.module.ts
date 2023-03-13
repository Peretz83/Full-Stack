import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/partials/navbar/navbar.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { FooterComponent } from './components/partials/footer/footer.component';
import { AboutPageComponent } from './components/pages/about-page/about-page.component';
import { TitlesComponent } from './components/partials/titles/titles.component';
import { FieldErrorComponent } from './components/partials/field-error/field-error.component';
import { ProjectsPageComponent } from './components/pages/projects-page/projects-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    LoginPageComponent,
    FooterComponent,
    AboutPageComponent,
    TitlesComponent,
    FieldErrorComponent,
    ProjectsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
