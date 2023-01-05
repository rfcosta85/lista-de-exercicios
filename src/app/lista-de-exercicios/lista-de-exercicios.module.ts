import { ListaDeExerciciosComponent } from './lista-de-exercicios.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaDeExerciciosRoutingModule } from './lista-de-exercicios-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ListaDeExerciciosComponent],
  imports: [CommonModule, ListaDeExerciciosRoutingModule, FormsModule],
})
export class ListaDeExerciciosModule {}
