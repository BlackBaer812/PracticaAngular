import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioMatrialComponent } from './formulario-matrial.component';

describe('FormularioMatrialComponent', () => {
  let component: FormularioMatrialComponent;
  let fixture: ComponentFixture<FormularioMatrialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioMatrialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioMatrialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
