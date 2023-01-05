import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDeExerciciosComponent } from './lista-de-exercicios.component';

describe('ListaDeExerciciosComponent', () => {
  let component: ListaDeExerciciosComponent;
  let fixture: ComponentFixture<ListaDeExerciciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaDeExerciciosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDeExerciciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
