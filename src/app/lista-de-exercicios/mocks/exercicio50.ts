import { ExerciciosBD } from '../models/exercicios.model';

export class Exercicio50 implements ExerciciosBD {
  public numero: number = 50;
  public descricao: string = `Ler um valor N, calcular e escrever o valor de H, onde H é dado por: H = 1 + 1/2 + 1/3 + 1/4 + ... 1/N`;
  public categoria: number = 3;
  public executar() {
    console.clear();
    console.log('Exercicio 50');
    let resposta = 's';
    let arrayResposta: number[] = [];
    let h = 1;

    do {
      let n = Number(prompt('Digite um valor N')?.replace(',', '.').trim());
      arrayResposta.push(n);
      resposta = String(prompt('Deseja continuar? s / n'));
    } while (resposta === 's');

    console.log('Array Resposta = ', arrayResposta);

    for (let i = 0; i < arrayResposta.length; i++) {
      h += 1 / arrayResposta[i];
      console.log('Equação', h);
    }

    console.log(`O resultado de H será: ${h}`);
  }
}
