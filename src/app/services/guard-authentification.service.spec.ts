import { TestBed } from '@angular/core/testing';

import { GuardAuthentificationService } from './guard-authentification.service';

describe('GuardAuthentificationService', () => {
  let service: GuardAuthentificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuardAuthentificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
