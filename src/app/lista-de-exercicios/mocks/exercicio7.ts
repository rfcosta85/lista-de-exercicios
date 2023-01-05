import { ExerciciosBD } from '../models/exercicios.model';

export class Exercicio7 implements ExerciciosBD {
  public numero = 7;
  public descricao =
    'Ler o nome de uma pessoa na forma “nome” seguido por “sobrenome” e escrever na forma “sobrenome” seguido por “nome”. Exemplo: ';
  public categoria = 1;
  public executar() {
    console.log('exercicio 07');
  }
}
