import { TestBed } from '@angular/core/testing';

import { SelectProductService } from './select-product.service';

describe('SelectProductService', () => {
  let service: SelectProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
