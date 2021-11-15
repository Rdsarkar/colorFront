import { TestBed } from '@angular/core/testing';

import { OutputDetailsService } from './output-details.service';

describe('OutputDetailsService', () => {
  let service: OutputDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OutputDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
