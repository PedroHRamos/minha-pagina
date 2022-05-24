import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardManagerComponent } from './card-manager.component';

describe('CardManagerComponent', () => {
  let component: CardManagerComponent;
  let fixture: ComponentFixture<CardManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
