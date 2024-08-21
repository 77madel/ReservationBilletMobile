import { TestBed } from '@angular/core/testing';

import { AnnulerReservService } from '../annuler-reserv.service';

describe('AnnulerReservService', () => {
  let service: AnnulerReservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnnulerReservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
