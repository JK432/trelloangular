import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { MatDialog } from '@angular/material/dialog';
import { DialogeService } from 'src/app/services/dialoge.service';
import { Ticket } from 'src/app/interfaces/ticket';
import { User } from 'src/app/interfaces/user';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-ticketeditform',
  templateUrl: './ticketeditform.component.html',
  styleUrls: ['./ticketeditform.component.css']
})
export class TicketeditformComponent {
  ticketform: FormGroup;
  ticket:Ticket;
  users: User[] = []
  constructor(public dialog: MatDialog, public dialoge: DialogeService, private formBuilder: FormBuilder, private http: HttpClient, private authService: AuthenticationService) {
this.ticket =dialoge.ticket;
    this.ticketform = this.formBuilder.group({
      title: [this.ticket.title, Validators.required],
      assignee: [this.ticket.assignee, Validators.required],
      desc: [this.ticket.desc, Validators.required],
      status: [this.ticket.Status, Validators.required],

    });
  }


  ngOnInit() {
    this.fetchdata()
  }


  fetchdata() {

    this.http.get<User[]>(environment.apiUrl + '/user/')
      .subscribe({
        next: (data) => {
          this.users = data
        }, error: (error) => { }
      });
  }

  onSubmit() {
    let newTicket: Ticket = { title: this.ticketform.get('title')!.value, assignee: this.ticketform.get('assignee')!.value, created_by: this.authService.getudata().id, created_time: this.ticket.created_time, desc: this.ticketform.get('desc')!.value, id:this.ticket.id, Status: this.ticketform.get('status')!.value, };
    this.http.put<Ticket>(environment.apiUrl + '/ticket/'+newTicket.id+'/', newTicket)
      .subscribe({
        next: (data) => {
          this.dialog.closeAll()
          location.reload();
        }, error: (error) => { }
      });
  }
}
