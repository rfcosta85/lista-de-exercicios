import { ExerciciosBD } from './../models/exercicios.model';
export class Exercicio25 implements ExerciciosBD {
  public numero: number = 25;
  public descricao: string = `Ler três valores e escrever a soma dos dois maiores`;
  public categoria: number = 2;
  public executar() {
    console.clear();
    console.log('Exercicio 25');
    const valor1 = Number(prompt('Digite o primeiro número: '));
    const valor2 = Number(prompt('Digite o segundo número:'));
    const valor3 = Number(prompt('Digite o terceiro número: '));

    console.log(
      `Valores digitados: ${valor1.toLocaleString(
        'br'
      )}, ${valor2.toLocaleString('br')}, ${valor3.toLocaleString('br')}`
    );

    if (valor1 > valor2 && valor1 > valor3 && valor2 > valor3) {
      const soma = valor1 + valor2;
      console.log(`A soma de ${valor1} + ${valor2} é igual a: ${soma}`);
    } else if (valor2 > valor1 && valor2 > valor3 && valor3 > valor1) {
      const soma = valor2 + valor3;
      console.log(`A soma de ${valor2} + ${valor3} é igual a: ${soma}`);
    } else if (valor3 > valor1 && valor3 > valor2 && valor2 > valor1) {
      const soma = valor3 + valor2;
      console.log(`A soma de ${valor3} + ${valor2} é igual a: ${soma}`);
    }
  }
}
