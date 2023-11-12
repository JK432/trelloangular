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
  selector: 'app-ticketaddform',
  templateUrl: './ticketaddform.component.html',
  styleUrls: ['./ticketaddform.component.css']
})
export class TicketaddformComponent {
  ticketform: FormGroup;
  users:User[]=[]
  constructor(public dialog: MatDialog, public dialoge: DialogeService, private formBuilder: FormBuilder, private http: HttpClient,private authService :AuthenticationService) {

   this.ticketform = this.formBuilder.group({
    title: ['', Validators.required],
     assignee: ['', Validators.required],
     desc: ['', Validators.required],
     status: [0, Validators.required],

  });
}

  ngOnInit() {
    this.fetchdata()
  }


fetchdata(){

  this.http.get<User[]>(environment.apiUrl + '/user/')
    .subscribe({
      next: (data) => {
        this.users = data
      }, error: (error) => { }
    });

  }


  onSubmit() {

    let newTicket: Ticket = { title: this.ticketform.get('title')!.value, assignee: this.ticketform.get('assignee')!.value, created_by: this.authService.getudata().id, created_time: new Date(Date.now()), desc: this.ticketform.get('desc')!.value, id: 0, Status: this.ticketform.get('status')!.value,};

    this.http.post<Ticket>(environment.apiUrl + '/ticket/', newTicket)
      .subscribe({
        next: (data) => {
          this.dialog.closeAll()
          location.reload();
        }, error: (error) => { }
      });
  }
}
