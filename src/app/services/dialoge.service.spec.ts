import { TestBed } from '@angular/core/testing';

import { DialogeService } from './dialoge.service';

describe('DialogeService', () => {
  let service: DialogeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DialogeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
