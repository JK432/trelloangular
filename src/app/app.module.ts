import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { TokenInterceptor } from './helpers/token.interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashComponent } from './components/dash/dash.component';
import { ANavComponent } from './components/a-nav/a-nav.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ProfileFormComponent } from './components/profile/profile-form/profile-form.component';
import {DragDropModule,CdkDrag,CdkDropList,CdkDropListGroup } from '@angular/cdk/drag-drop';
import { KanbanboardComponent } from './components/kanbanboard/kanbanboard.component';
import { TimeAgoPipe } from './pipes/time-ago.pipe';
import { TicketeditformComponent } from './components/kanbanboard/ticketeditform/ticketeditform.component';
import { TicketaddformComponent } from './components/kanbanboard/ticketaddform/ticketaddform.component';
import { TicketdetailComponent } from './components/kanbanboard/ticketdetail/ticketdetail.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashComponent,
    ANavComponent,
    ProfileComponent,
    ProfileFormComponent,
    KanbanboardComponent,
    TimeAgoPipe,
    TicketeditformComponent,
    TicketaddformComponent,
    TicketdetailComponent,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    DragDropModule,
    CdkDrag,
    CdkDropList,
    CdkDropListGroup,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
