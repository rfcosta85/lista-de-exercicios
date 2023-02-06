import { ExerciciosBD } from './../models/exercicios.model';
export class Exercicio28 implements ExerciciosBD {
  public numero: number = 28;
  public descricao: string = `Ler os coeficientes a, b e c de uma equação de 2º grau, calcular e escrever
suas raízes.`;
  public categoria: number = 2;
  public executar() {
    console.clear();
    console.log(`Exercicio 28`);
    const valorA = Number(
      prompt('Digite o valor de A: ')?.replace(',', '.').trim()
    );
    const valorB = Number(
      prompt('Digite o valor de B: ')?.replace(',', '.').trim()
    );
    const valorC = Number(
      prompt('Digite o valor de C: ')?.replace(',', '.').trim()
    );
    console.log(`Valor de A: ${valorA}`);
    console.log(`Valor de B: ${valorB}`);
    console.log(`Valor de C: ${valorC}`);

    const delta = Math.pow(valorB, 2) - 4 * valorA * valorC;
    console.log(`Delta = ${delta}`);
    if (delta < 0) {
      console.log('Não existe raiz real');
    } else if (delta === 0) {
      const raiz = -valorB / (2 * valorA);
      console.log(`Raiz única: ${raiz}`);
    } else {
      const raiz1 = (-valorB + Math.sqrt(delta)) / (2 * valorA);
      const raiz2 = (-valorB - Math.sqrt(delta)) / (2 * valorA);
      console.log(`Raiz 1: ${(raiz1.toLocaleString('br'), [2])}`);
      console.log(`Raiz 2: ${(raiz2.toLocaleString('br'), [2])}`);
    }
  }
}
