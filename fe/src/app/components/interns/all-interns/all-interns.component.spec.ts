import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllInternsComponent } from './all-interns.component';

describe('AllInternsComponent', () => {
  let component: AllInternsComponent;
  let fixture: ComponentFixture<AllInternsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllInternsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllInternsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
