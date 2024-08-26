import { TestBed } from '@angular/core/testing';

import { ReservationVolService } from './reservation-vol.service';

describe('ReservationVolService', () => {
  let service: ReservationVolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReservationVolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
