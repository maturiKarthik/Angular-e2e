import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPgComponent } from './blog-pg.component';

describe('BlogPgComponent', () => {
  let component: BlogPgComponent;
  let fixture: ComponentFixture<BlogPgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogPgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
