import { TestBed } from '@angular/core/testing';

import { VolServiceService } from './vol-service.service';

describe('VolServiceService', () => {
  let service: VolServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VolServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
