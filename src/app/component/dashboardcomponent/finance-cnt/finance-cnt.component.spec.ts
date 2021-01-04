import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceCntComponent } from './finance-cnt.component';

describe('FinanceCntComponent', () => {
  let component: FinanceCntComponent;
  let fixture: ComponentFixture<FinanceCntComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinanceCntComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinanceCntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
