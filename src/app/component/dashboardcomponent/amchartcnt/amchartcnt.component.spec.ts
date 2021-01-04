import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmchartcntComponent } from './amchartcnt.component';

describe('AmchartcntComponent', () => {
  let component: AmchartcntComponent;
  let fixture: ComponentFixture<AmchartcntComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmchartcntComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmchartcntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
