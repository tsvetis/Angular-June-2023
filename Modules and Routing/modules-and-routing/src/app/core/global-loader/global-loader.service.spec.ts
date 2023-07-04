import { TestBed } from '@angular/core/testing';

import { GlobalLoaderService } from './global-loader.service';

describe('GlobalLoaderService', () => {
  let service: GlobalLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
