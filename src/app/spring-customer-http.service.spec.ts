import { TestBed } from '@angular/core/testing';

import { SpringCustomerHttpService } from './spring-customer-http.service';

describe('SpringCustomerHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpringCustomerHttpService = TestBed.get(SpringCustomerHttpService);
    expect(service).toBeTruthy();
  });
});
