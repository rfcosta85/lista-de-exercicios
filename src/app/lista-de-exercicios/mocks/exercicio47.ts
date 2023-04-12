import { ExerciciosBD } from '../models/exercicios.model';

export class Exercicio47 implements ExerciciosBD {
  public numero: number = 47;
  public descricao: string = `Ler um conjunto de pares de valores inteiros, calcular e escrever o resultado da divisão do primeiro pelo segundo. Caso o segundo valor seja nulo, escrever a mensagem “DIVISÃO INVÁLIDA”.`;
  public categoria: number = 3;
  public executar() {
    console.clear();
    console.log(`Exercicio 47`);
    let continuar = 'sim';
    let divisao = 1;
    do {
      let num1 = Number(prompt(`Digite o primeiro número:`));
      let num2 = Number(prompt(`Digite o segundo número:`));
      continuar = String(prompt(`Deseja continuar? (S/N)`));
      if (num2 == 0) {
        console.log(`DIVISÃO INVÁLIDA`);
      } else {
        divisao = num1 / num2;
        console.log(`Resultado da divisão: ${divisao.toLocaleString('pt-BR')}`);
      }
    } while (continuar == 'sim');
  }
}
