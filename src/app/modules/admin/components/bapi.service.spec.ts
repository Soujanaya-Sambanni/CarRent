import { TestBed } from '@angular/core/testing';

import { BapiService } from './bapi.service';

describe('BapiService', () => {
  let service: BapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
