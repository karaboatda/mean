import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CCardComponent } from './c-card.component';

describe('CCardComponent', () => {
  let component: CCardComponent;
  let fixture: ComponentFixture<CCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
