import { TestBed } from '@angular/core/testing';

import { ListOfStudyService } from './list-of-study.service';

describe('ListOfStudyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListOfStudyService = TestBed.get(ListOfStudyService);
    expect(service).toBeTruthy();
  });
});
