import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProfileFormComponent } from '../components/profile/profile-form/profile-form.component';
import { TicketdetailComponent } from '../components/kanbanboard/ticketdetail/ticketdetail.component';
import { TicketeditformComponent } from '../components/kanbanboard/ticketeditform/ticketeditform.component';
import { TicketaddformComponent } from '../components/kanbanboard/ticketaddform/ticketaddform.component';
import { Ticket } from '../interfaces/ticket';
@Injectable({
  providedIn: 'root'
})
export class DialogeService {
ticket:Ticket ={assignee:-1,created_by:-1,created_time:new Date(),desc:"",id:-1,Status:-1,title:"",}
  constructor(private dialog:MatDialog) {}

   openProfileForm(){
     this.dialog.open(ProfileFormComponent);
   }
  openTicketDetails(ticket:Ticket) {
    this.ticket =ticket;
    this.dialog.open(TicketdetailComponent);
  }
  openTicketEdit(ticket:Ticket){
    this.ticket = ticket;
    this.dialog.open(TicketeditformComponent);
  }
  openTicketAdd(){
    this.dialog.open(TicketaddformComponent);
  }
}
