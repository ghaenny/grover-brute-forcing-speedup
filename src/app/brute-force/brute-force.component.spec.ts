import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BruteForceComponent } from './brute-force.component';

describe('BruteForceComponent', () => {
  let component: BruteForceComponent;
  let fixture: ComponentFixture<BruteForceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BruteForceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BruteForceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
