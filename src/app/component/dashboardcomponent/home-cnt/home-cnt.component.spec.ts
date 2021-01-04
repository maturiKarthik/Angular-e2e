import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCntComponent } from './home-cnt.component';

describe('HomeCntComponent', () => {
  let component: HomeCntComponent;
  let fixture: ComponentFixture<HomeCntComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeCntComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
