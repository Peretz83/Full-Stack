import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { ApiService } from 'src/app/core/api.service';
import { Ticket } from 'src/app/shared/interfaces/ITickets';

@Component({
  selector: 'app-selected-ticket-page',
  templateUrl: './selected-ticket-page.component.html',
  styleUrls: ['./selected-ticket-page.component.css']
})
export class SelectedTicketPageComponent implements OnInit {

  ticket: Ticket | null = null;

  @Input() sectionTitle = 'Ticket page'
  @Input() sectionIcon = 'fa-solid fa-ticket'

  constructor(private api: ApiService, private activeRoute: ActivatedRoute){}

    ngOnInit(): void {
        this.activeRoute.paramMap.pipe(
            switchMap(params => {
                const id = params.get('id') as string;
                return this.api.getOneTicket(id);
            })
        ).subscribe({
            next: (data: Ticket) => {
                this.ticket = data;
                console.log(data);

            },
            error: (err) => console.log(err)
        })
    }

}
