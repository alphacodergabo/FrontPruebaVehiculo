import { TestBed } from '@angular/core/testing';

import { UtilsGeneralService } from './utils-general.service';

describe('UtilsGeneralService', () => {
  let service: UtilsGeneralService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UtilsGeneralService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
