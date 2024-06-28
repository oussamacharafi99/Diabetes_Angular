import { TestBed } from '@angular/core/testing';

import { DataGlycemieService } from './data-glycemie.service';

describe('DataGlycemieService', () => {
  let service: DataGlycemieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataGlycemieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
