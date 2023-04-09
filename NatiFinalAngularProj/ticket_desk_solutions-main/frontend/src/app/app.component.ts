import { Component } from '@angular/core';
import { ApiService } from './core/api.service';
import { AuthService } from './core/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

  constructor(private api: ApiService, private auth: AuthService){}

  // ngAfterViewInit(): void {
  //       this.api.redirectToHome();
  //   }

  loggedIn(): boolean {
        return this.auth.isLoggedIn();
    }

}
