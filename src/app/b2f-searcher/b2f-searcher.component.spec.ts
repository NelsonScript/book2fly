import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { B2fSearcherComponent } from './b2f-searcher.component';

describe('B2fSearcherComponent', () => {
  let component: B2fSearcherComponent;
  let fixture: ComponentFixture<B2fSearcherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B2fSearcherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(B2fSearcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
