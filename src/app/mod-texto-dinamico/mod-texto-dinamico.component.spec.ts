import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModTextoDinamicoComponent } from './mod-texto-dinamico.component';

describe('ModTextoDinamicoComponent', () => {
  let component: ModTextoDinamicoComponent;
  let fixture: ComponentFixture<ModTextoDinamicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModTextoDinamicoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModTextoDinamicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
