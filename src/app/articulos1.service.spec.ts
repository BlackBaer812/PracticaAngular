import { TestBed } from '@angular/core/testing';

import { Articulos1Service } from './articulos1.service';

describe('Articulos1Service', () => {
  let service: Articulos1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Articulos1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
