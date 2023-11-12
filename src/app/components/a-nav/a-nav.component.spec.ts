import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ANavComponent } from './a-nav.component';

describe('ANavComponent', () => {
  let component: ANavComponent;
  let fixture: ComponentFixture<ANavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ANavComponent]
    });
    fixture = TestBed.createComponent(ANavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
