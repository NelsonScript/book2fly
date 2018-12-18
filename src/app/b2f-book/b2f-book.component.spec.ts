import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { B2fBookComponent } from './b2f-book.component';

describe('B2fBookComponent', () => {
  let component: B2fBookComponent;
  let fixture: ComponentFixture<B2fBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B2fBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(B2fBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
