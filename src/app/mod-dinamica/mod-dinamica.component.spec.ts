import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModDinamicaComponent } from './mod-dinamica.component';

describe('ModDinamicaComponent', () => {
  let component: ModDinamicaComponent;
  let fixture: ComponentFixture<ModDinamicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModDinamicaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModDinamicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
