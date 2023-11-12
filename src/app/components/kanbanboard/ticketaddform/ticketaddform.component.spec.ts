import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketaddformComponent } from './ticketaddform.component';

describe('TicketaddformComponent', () => {
  let component: TicketaddformComponent;
  let fixture: ComponentFixture<TicketaddformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TicketaddformComponent]
    });
    fixture = TestBed.createComponent(TicketaddformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
