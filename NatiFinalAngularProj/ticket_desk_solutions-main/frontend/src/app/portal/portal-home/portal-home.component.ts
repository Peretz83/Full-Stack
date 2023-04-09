import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { ApiService } from 'src/app/core/api.service';
import { Ticket } from 'src/app/shared/interfaces/ITickets';

@Component({
  selector: 'app-portal-home',
  templateUrl: './portal-home.component.html',
  styleUrls: ['./portal-home.component.css']
})
export class PortalHomeComponent {
  sectionTitle = 'Tickets'
  sectionIcon = 'fa-solid fa-ticket'
  tickets: Array<Ticket> = [];
  agents = ['Nati', 'Leeav', 'Sharon']
  priorityOptions = ['Low', 'Medium', 'High', 'Urgent']
  statusOptions = ['Open', 'Closed', 'Pending', 'Waiting on response']
  // ticket: Ticket | null = null;

  editTicketForm = new FormGroup({
        status: new FormControl('', {
            validators: [
                Validators.minLength(2),
                Validators.maxLength(100)
            ]
        }),
        priority: new FormControl('', {
            validators: [
                Validators.minLength(2),
                Validators.maxLength(100)
            ]
        }),
        agent: new FormControl('', {
            validators: [
                Validators.minLength(2),
                Validators.maxLength(100)
            ]
        })
    })

    constructor(private api: ApiService, private router: Router, private activeRoute: ActivatedRoute){}

    getAllTickets() {
        this.api.getTickets().subscribe({
            next: (data: Array<Ticket>) => {
              this.tickets = data

            },
              error: (err) => console.log(err)
        })
    }

    ngOnInit(): void {
        this.getAllTickets();

        // this.activeRoute.paramMap.pipe(
        //     switchMap(params => {
        //         const id = params.get('id') as string;
        //         return this.api.getOneTicket(id);
        //     })
        // ).subscribe({
        //     next: (data: Ticket) => {
        //         this.ticket = data;
        //         const status = data.status || '';
        //         const priority = data.priority || '';
        //         const agent = data.agent || '';
        //         this.editTicketForm.get('status')?.setValue(status);
        //         this.editTicketForm.get('priority')?.setValue(priority);
        //         this.editTicketForm.get('agent')?.setValue(agent);
        //     },
        //     error: (err) => console.log(err)
        // })


    }


  onSubmit(){
    // if (this.editTicketForm.invalid || !this.ticket?._id) {
    //         return;
    //     }

    //     this.api.updateTicket(this.ticket?._id, this.editTicketForm.value).subscribe({
    //         next: (data: Ticket) => {
    //             this.router.navigate(['portalHome']);
    //         },
    //         error: (err) => console.log(err)
    //     })

  }


}
