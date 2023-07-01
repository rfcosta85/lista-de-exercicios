import { ExerciciosBD } from '../models/exercicios.model';

export class Exercicio54 implements ExerciciosBD {
  public numero: number = 54;
  public descricao: string = `Ler um conjunto de valores, calcular e escrever o desvio padrão desses
valores.`;
  public categoria: number = 3;
  public executar() {
    console.clear();
    console.log('Exercicio 54');
    let resposta: string = 'nao';
    let numeros: number[] = [];
    let media: number;
    let desvioQuadratico: number[] = [];
    let sigma: number;
    let variancia: number;

    do {
      const numero = Number(prompt('Digite um número: '));
      numeros.push(numero);
      resposta = String(prompt('Deseja continuar? ')?.toLocaleLowerCase());
    } while (resposta === 'sim');

    //  Calculando a média

    function calculoMedia(): void {
      let somatorio = 0;
      for (let i = 0; i < numeros.length; i++) {
        somatorio += numeros[i];
      }
      media = somatorio / numeros.length;
      console.log('Média = ', media.toLocaleString('br'));
    }
    calculoMedia();

    // Calculo desvio quadratico

    function calculoDesvioQuadratico(): void {
      let fator = 0;
      for (let i = 0; i < numeros.length; i++) {
        fator = (numeros[i] - media) ** 2;
        console.log('Fator posição: ', i, ' ', fator);
        desvioQuadratico.push(fator);
      }

      console.log('Desvio Quadrático: ', desvioQuadratico);
    }

    calculoDesvioQuadratico();

    // Calculo Variância

    function calculoVariancia(): void {
      let somaDesvioQuadratico = 0;
      let mediaDesvioQuadratico = 1;
      for (let i = 0; i < desvioQuadratico.length; i++) {
        somaDesvioQuadratico += desvioQuadratico[i];
      }
      console.log('Soma desvio quadrático: ', somaDesvioQuadratico);
      mediaDesvioQuadratico = somaDesvioQuadratico / desvioQuadratico.length;
      console.log('Média Desvio Quadrático: ', mediaDesvioQuadratico);
      variancia = mediaDesvioQuadratico;
      console.log('Variância: ', variancia);

      // Cálculo Desvio padrão:

      sigma = variancia ** 1 / 2;
      console.log('O desvio padrão será de: ', sigma.toLocaleString('br'));
    }

    calculoVariancia();
  }
}
