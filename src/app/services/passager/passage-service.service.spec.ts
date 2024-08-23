import { TestBed } from '@angular/core/testing';

import { PassageServiceService } from './passage-service.service';

describe('PassageServiceService', () => {
  let service: PassageServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PassageServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
