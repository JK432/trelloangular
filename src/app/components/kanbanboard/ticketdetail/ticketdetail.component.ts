import { Component, Input } from '@angular/core';
import { Ticket } from 'src/app/interfaces/ticket';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/interfaces/user';
import { environment } from 'src/environments/environment';
import { DialogeService } from 'src/app/services/dialoge.service';

@Component({
  selector: 'app-ticketdetail',
  templateUrl: './ticketdetail.component.html',
  styleUrls: ['./ticketdetail.component.css']
})
export class TicketdetailComponent {
 ticket:Ticket= {assignee:-1,created_by:-1,created_time:new Date(),desc:"",id:-1,Status:-1,title:""}
  assignee:User={age:-1,email:"",first_name:"",id:-1,last_name:"",role:-1}
  created_by: User = { age: -1, email: "", first_name: "", id: -1, last_name: "", role: -1 }


  constructor(private http: HttpClient,private dialoge:DialogeService){
    this.ticket = this.dialoge.ticket
  }
  ngOnInit(){

    this.getassignee()
    this.getcreator()
  }


  getassignee() {
     let url = environment.apiUrl + '/user/' + this.ticket.assignee+'/'
      this.http.get<User>(url).subscribe({
      next: (data) => {
        this.assignee = data;
      }, error: (error) => { }
    });
  }

  getcreator() {
    let url = environment.apiUrl + '/user/' + this.ticket.created_by + '/'
    this.http.get<User>(url).subscribe({
      next: (data) => {
        this.created_by = data;
      }, error: (error) => { }
    });
  }

}
