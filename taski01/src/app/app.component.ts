import { Component } from '@angular/core';

export interface Task{
  title?: string | null
  description?: string | null
  complete?: boolean | null
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'taski01';
}
