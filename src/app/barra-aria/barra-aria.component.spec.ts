import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraAriaComponent } from './barra-aria.component';

describe('BarraAriaComponent', () => {
  let component: BarraAriaComponent;
  let fixture: ComponentFixture<BarraAriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarraAriaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarraAriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
