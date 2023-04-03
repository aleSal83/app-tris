import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RippleOverlayComponent } from './ripple-overlay.component';

describe('RippleOverlayComponent', () => {
  let component: RippleOverlayComponent;
  let fixture: ComponentFixture<RippleOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RippleOverlayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RippleOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
