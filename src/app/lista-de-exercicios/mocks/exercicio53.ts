import { ExerciciosBD } from '../models/exercicios.model';

export class Exercicio53 implements ExerciciosBD {
  public numero: number = 53;
  public descricao: string = `O valor aproximado de pi pode ser calculado através da fórmula: PI = raíz cúbica de S * 32. 
  Ler um valor inteiro positivo N, calcular e escrever o valor de PI para os N primeiros termos da série.`;
  public categoria: number = 3;
  public executar() {
    console.clear();
    console.log(`Exercicio 53`);
    const n = Number(prompt('Digite um número: '));
    let soma = 1;
    for (let i = 0; i < n; i++) {
      soma = (soma * 32) ** 1 / 3;
    }
    console.log(`O cálculo de PI para o número ${n}, foi de: ${soma}`);
  }
}
