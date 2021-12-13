import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrialboardComponent } from './trialboard.component';

describe('TrialboardComponent', () => {
  let component: TrialboardComponent;
  let fixture: ComponentFixture<TrialboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrialboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrialboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
