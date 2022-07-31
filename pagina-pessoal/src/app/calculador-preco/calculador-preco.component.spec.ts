import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadorPrecoComponent } from './calculador-preco.component';

describe('CalculadorPrecoComponent', () => {
  let component: CalculadorPrecoComponent;
  let fixture: ComponentFixture<CalculadorPrecoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculadorPrecoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculadorPrecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
