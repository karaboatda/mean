import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IProfileComponent } from './i-profile.component';

describe('IProfileComponent', () => {
  let component: IProfileComponent;
  let fixture: ComponentFixture<IProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
