import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DensitymapComponent } from './densitymap.component';

describe('DensitymapComponent', () => {
  let component: DensitymapComponent;
  let fixture: ComponentFixture<DensitymapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DensitymapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DensitymapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
