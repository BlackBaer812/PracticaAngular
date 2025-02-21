import { TestBed } from '@angular/core/testing';

import { EmergenteStrService } from './emergente-str.service';

describe('EmergenteStrService', () => {
  let service: EmergenteStrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmergenteStrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
