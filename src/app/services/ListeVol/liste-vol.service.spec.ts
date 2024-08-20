import { TestBed } from '@angular/core/testing';

import { ListeVolService } from './liste-vol.service';

describe('ListeVolService', () => {
  let service: ListeVolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListeVolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
