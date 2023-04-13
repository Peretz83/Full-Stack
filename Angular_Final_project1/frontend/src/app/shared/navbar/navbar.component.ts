import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/api.service';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private auth:AuthService, private api:ApiService, private router:Router){

  }
   loggedIn(): boolean {
        return this.auth.isLoggedIn();
    }
  logout() {
        this.api.deleteToken();
        this.router.navigate(['/']);
    }
}
