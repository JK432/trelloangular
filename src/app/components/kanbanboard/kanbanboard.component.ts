import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDragPlaceholder, } from '@angular/cdk/drag-drop';
import { User } from 'src/app/interfaces/user';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Ticket } from 'src/app/interfaces/ticket';
import { DialogeService } from 'src/app/services/dialoge.service';

@Component({
  selector: 'app-kanbanboard',
  templateUrl: './kanbanboard.component.html',
  styleUrls: ['./kanbanboard.component.css']
})

export class KanbanboardComponent {
  user: User
  tickets: Ticket[] = []
  todos: Ticket[] = [];
  doings: Ticket[] = []
  dones: Ticket[] = [];

  constructor(private authenticationService: AuthenticationService, private http: HttpClient,private dialoge:DialogeService) {
    this.user = authenticationService.getudata();
  }

  ngOnInit() {
    this.user = this.authenticationService.getudata();
    this.fetchtickets()
  }

  fetchtickets() {
    let url: string = "";
    if (this.user.role == 0) {
      url = environment.apiUrl + '/ticket/'
    }
    if (this.user.role == 1) {
      url = environment.apiUrl + '/ticket/?assignee=' + this.user.id
    }

    this.http.get<Ticket[]>(url).subscribe({
      next: (data) => {
        this.tickets = data;
        console.log(data)
        this.todos = this.tickets.filter((ticket) => ticket.Status == 0);
        this.doings = this.tickets.filter((ticket) => ticket.Status == 1);
        this.dones = this.tickets.filter((ticket) => ticket.Status == 2);


      }, error: (error) => { }
    });



  }


  opendetails(ticket:Ticket){
    this.dialoge.openTicketDetails(ticket)
  }
  openadd() {
    this.dialoge.openTicketAdd()
  }
  openedit(ticket:Ticket) {
    this.dialoge.openTicketEdit(ticket)
  }

  drop(event: CdkDragDrop<Ticket[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      let newticket = event.container.data[event.currentIndex];
      newticket.Status = Number(event.container.id)

      console.log(newticket)
      let url = environment.apiUrl + '/ticket/' + newticket.id+'/'
      this.http.patch<Ticket>(url,newticket).subscribe({
        next: (data) => {
        }, error: (error) => { location.reload(); }
      });
    }


  }




}
