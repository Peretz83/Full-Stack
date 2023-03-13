import { Component, Input } from '@angular/core';

@Component({
  selector: 'titles',
  templateUrl: './titles.component.html',
  styleUrls: ['./titles.component.css']
})
export class TitlesComponent {
@Input()
title!:string

}
