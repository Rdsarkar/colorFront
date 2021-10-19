import { TestBed } from '@angular/core/testing';

import { MyColorService } from './my-color.service';

describe('MyColorService', () => {
  let service: MyColorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyColorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
