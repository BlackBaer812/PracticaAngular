import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaDeferComponent } from './prueba-defer.component';

describe('PruebaDeferComponent', () => {
  let component: PruebaDeferComponent;
  let fixture: ComponentFixture<PruebaDeferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PruebaDeferComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PruebaDeferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
