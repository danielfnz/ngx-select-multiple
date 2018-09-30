import { TestBed } from '@angular/core/testing';

import { NgxSelectMultipleService } from './ngx-select-multiple.service';

describe('NgxSelectMultipleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxSelectMultipleService = TestBed.get(NgxSelectMultipleService);
    expect(service).toBeTruthy();
  });
});
