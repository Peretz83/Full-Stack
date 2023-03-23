import { Component } from '@angular/core';

export interface User {
    _id?: string | null;
    name?: string | null;
    email?: string | null;
    password?: string | null;
    token?: string | null;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'taskio-jwt';
}
