import { TestBed } from '@angular/core/testing';

import { NelifyFormsService } from './nelify-forms.service';

describe('NelifyFormsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NelifyFormsService = TestBed.get(NelifyFormsService);
    expect(service).toBeTruthy();
  });
});
