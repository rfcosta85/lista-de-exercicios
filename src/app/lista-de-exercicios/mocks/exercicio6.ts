import { ExerciciosBD } from '../models/exercicios.model';

export class Exercicio6 implements ExerciciosBD {
  public numero: number = 6;
  public descricao: string =
    'Ler um valor inteiro e escrever o seu antecessor e o seu sucessor';
  public categoria: number = 1;

  public executar() {
    console.clear();
    console.log('exercicio 06');
    let valor = Number(prompt('Digite um número', ''));
    let valorAntecessor = valor - 1;
    let valorSucessor = valor + 1;

    console.log(`Valor do Prompt: ${valor}
    Valor Antecessor: ${valorAntecessor}
    Valor Sucessor: ${valorSucessor}`);
  }
}
