import { TestBed } from '@angular/core/testing';

import { PasgenService } from './pasgen.service';

describe('PasgenService', () => {
  let service: PasgenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PasgenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
