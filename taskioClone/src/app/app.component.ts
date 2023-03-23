import { AfterViewInit, Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ApiService } from './core/api.service';
import { SessionService } from './core/session.service';

export interface Task {
    _id?: string | null;
    title?: string | null;
    complete?: boolean | null;
    description?: string | null;
}

export interface Project {
    title?: string|null;
    description?: string|null;
    image?: string|null;
    status?: string|null;
    _id?: string|null;
}

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
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
    developer = 'Yoyo technolegies';

    constructor(
        private session: SessionService,
        private api: ApiService,
        private router: Router
    ) { }

    ngAfterViewInit(): void {
        this.session.redirectToHome();
    }

    logout() {
        this.api.deleteToken();
        this.router.navigate(['login']);
    }


}