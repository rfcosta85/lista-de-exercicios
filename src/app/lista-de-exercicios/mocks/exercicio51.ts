import { ExerciciosBD } from './../models/exercicios.model';

export class Exercicio51 implements ExerciciosBD {
  public numero: number = 51;
  public descricao: string = `Ler um valor inteiro positivo N, calcular e escrever o fatorial de N.`;
  public categoria: number = 3;
  public executar() {
    console.clear();
    console.log(`Exercicio 51`);

    let n = Number(prompt('Digite um valor N'));
    let resultado = 1;
    let array: any[] = [];
    let showResult = '';

    for (let i = n; i >= 1; i--) {
      resultado *= i;
      array.push(i);
    }

    showResult = array.join(' x ') + ' = ' + resultado;
    console.log(showResult);
  }
}
