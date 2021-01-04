import { TestBed } from '@angular/core/testing';

import { ListOfBankService } from './list-of-bank.service';

describe('ListOfBankService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListOfBankService = TestBed.get(ListOfBankService);
    expect(service).toBeTruthy();
  });
});
