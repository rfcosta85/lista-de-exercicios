import { ExerciciosBD } from '../models/exercicios.model';

// falta fazer a soma

export class Exercicio52 implements ExerciciosBD {
  public numero: number = 52;
  public descricao: string = `Ler um valor inteiro positivo N, calcular e escrever o termo de ordem N da
série de Fibonacci.`;
  public categoria: number = 3;
  public executar() {
    console.clear();
    console.log(`Exercicio 52`);

    let soma = 1;

    function fibonacci(fator: number) {
      if (fator <= 0) {
        return 'O número deve ser maior que zero.';
      } else if (fator === 1) {
        return 'O número deve ser maior que 1';
      } else if (fator === 2) {
        return [0, 1, 1];
      } else {
        const sequenciaFibonacci = [0, 1];
        for (let i = 2; i <= fator; i++) {
          const proximoNumero =
            sequenciaFibonacci[i - 1] + sequenciaFibonacci[i - 2];
          sequenciaFibonacci.push(proximoNumero);
          soma += proximoNumero;
        }
        return sequenciaFibonacci;
      }
    }

    const numero = Number(prompt('Digite o valor de N:'));
    const resultado = fibonacci(numero);
    console.log(resultado);
    console.log('Soma = ', soma);
  }
}
