import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketPalaceComponent } from './market-palace.component';

describe('MarketPalaceComponent', () => {
  let component: MarketPalaceComponent;
  let fixture: ComponentFixture<MarketPalaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketPalaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketPalaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
