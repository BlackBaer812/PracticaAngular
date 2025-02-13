import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PMaterialComponent } from './p-material.component';

describe('PMaterialComponent', () => {
  let component: PMaterialComponent;
  let fixture: ComponentFixture<PMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PMaterialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
