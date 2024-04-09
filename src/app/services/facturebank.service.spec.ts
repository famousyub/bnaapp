import { TestBed } from '@angular/core/testing';

import { FacturebankService } from './facturebank.service';

describe('FacturebankService', () => {
  let service: FacturebankService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FacturebankService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
