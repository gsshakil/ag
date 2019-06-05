import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundinngComponent } from './fundinng.component';

describe('FundinngComponent', () => {
  let component: FundinngComponent;
  let fixture: ComponentFixture<FundinngComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundinngComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundinngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
