import { TestBed } from '@angular/core/testing';

import { ServicesortieService } from './service-sortie.service';

describe('ServiceSortieService', () => {
  let service: ServicesortieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesortieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
