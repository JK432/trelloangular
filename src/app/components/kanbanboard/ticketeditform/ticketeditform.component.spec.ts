import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketeditformComponent } from './ticketeditform.component';

describe('TicketeditformComponent', () => {
  let component: TicketeditformComponent;
  let fixture: ComponentFixture<TicketeditformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TicketeditformComponent]
    });
    fixture = TestBed.createComponent(TicketeditformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
