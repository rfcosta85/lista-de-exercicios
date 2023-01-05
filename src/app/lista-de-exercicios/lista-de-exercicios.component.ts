import { Categoria } from './enums/categoria.enum';
import { ExerciciosBD } from './models/exercicios.model';
import { Component, OnInit } from '@angular/core';
import { ListaExerciciosMock } from './mocks/exercicios.mock';

@Component({
  selector: 'app-lista-de-exercicios',
  templateUrl: './lista-de-exercicios.component.html',
  styleUrls: ['./lista-de-exercicios.component.less'],
})
export class ListaDeExerciciosComponent implements OnInit {
  termoDeBusca = '';
  termoDaCategoria: number = -1;
  exercicios = ListaExerciciosMock;
  filtroExerciciosArray: ExerciciosBD[] = [];
  categoriaEnum = Categoria;

  constructor() {}

  ngOnInit(): void {
    this.getArray();
  }

  getArray(): void {
    this.filtroExerciciosArray = [...this.exercicios];
  }

  condicaoFiltrar(): void {
    this.filtroExerciciosArray = this.exercicios.filter(
      (exercicio: ExerciciosBD) => {
        // Se falhar filtro de categoria
        if (
          this.termoDaCategoria != -1 &&
          this.termoDaCategoria != exercicio.categoria
        ) {
          return false;
        }
        // Filtro de texto
        return (
          exercicio.descricao.toLocaleLowerCase().indexOf(this.termoDeBusca) !==
          -1
        );
      }
    );
  }

  onSelectFiltroDeCategoriaChange(): void {
    this.condicaoFiltrar();
  }

  onInputfiltroDeBuscaInput(): void {
    this.condicaoFiltrar();
  }

  onBtnResolucaoClick(exercicio: ExerciciosBD): void {
    exercicio.executar();
  }
}
