import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePSWComponent } from './change-psw.component';

describe('ChangePSWComponent', () => {
  let component: ChangePSWComponent;
  let fixture: ComponentFixture<ChangePSWComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangePSWComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangePSWComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
