import { TestBed } from '@angular/core/testing';

import { ListOfSchoolsService } from './list-of-schools.service';

describe('ListOfSchoolsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListOfSchoolsService = TestBed.get(ListOfSchoolsService);
    expect(service).toBeTruthy();
  });
});
