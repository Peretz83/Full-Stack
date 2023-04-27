import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPageComponent } from './search-page/search-page.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SearchPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule

  ],
  exports:[
    SearchPageComponent
  ]
})
export class SearchModule { }
