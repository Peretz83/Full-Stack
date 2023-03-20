import { AfterViewInit, Component } from '@angular/core';
import { SessionService } from './core/session.service';

export interface Task {
    title?: string | null;
    _id?: string | null;
    complete?: boolean | null;
    description?: string | null;
}

export interface Project {
    title: string;
    description: string;
    image: string;
    status: 'PLANNED' | 'IN PROGRESS' | 'DONE'
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
    developer = 'Yoyo technolegies';

    constructor(private session: SessionService) { }

    ngAfterViewInit(): void {
        this.session.redirectToHome();
    }


}
