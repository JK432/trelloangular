import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Ticket } from 'src/app/interfaces/ticket';
import { User } from 'src/app/interfaces/user';
@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent {
  tickets: Ticket[] = []
  atickets: Ticket[] = []
  user: User
  ttodo: Number = 0
  tdoing: Number = 0
  done: Number = 0
  todo: Number = 0
  doing: Number = 0
  tdone: Number = 0
  assigned: Number = 0
  total: Number = 0
  constructor(private authenticationService: AuthenticationService, private http: HttpClient) {
    this.user = this.authenticationService.getudata()
  }
  ngOnInit() {
    this.fetchtickets()
  }
  fetchtickets() {
    let url:string = "";
    url = environment.apiUrl + '/ticket/'
    let ttickets: Ticket[] = []

    this.http.get<Ticket[]>(url).subscribe({
      next: (data) => {
        this.tickets = data;
        this.total = this.tickets.length
        this.ttodo = this.tickets.filter((ticket) => ticket.Status == 0).length;
        this.tdoing = this.tickets.filter((ticket) => ticket.Status == 1).length;
        this.tdone = this.tickets.filter((ticket) => ticket.Status == 2).length;
        this.atickets = this.tickets.filter((ticket) => ticket.assignee == this.user.id)
        this.assigned = this.atickets.length
        this.todo = this.atickets.filter((ticket) => ticket.Status == 0).length;
        this.doing = this.atickets.filter((ticket) => ticket.Status == 1).length;
        this.done = this.atickets.filter((ticket) => ticket.Status == 2).length;
      }, error: (error) => { }
    });
  }
}
