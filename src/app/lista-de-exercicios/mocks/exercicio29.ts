import { ExerciciosBD } from './../models/exercicios.model';
export class Exercicio29 implements ExerciciosBD {
  public numero: number = 29;
  public descricao: string = `Ler três valores A, B e C e escrever se podem ou não representar os lados
    de um triângulo. (AJUSTAR)`;
  public categoria: number = 2;
  public executar() {
    console.clear();
    console.log(`Exercicio 29`);
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
    console.log(`A + B = ${valorA + valorB}`);
    console.log(`A + C = ${valorA + valorC}`);
    console.log(`B + C = ${valorB + valorC}`);
    const soma = valorA + valorB + valorC;
    console.log(`soma dos lados: ${valorA} + ${valorB} + ${valorC} = ${soma}`);
    console.log(` A - B = ${valorA - valorB}`);
    console.log(` A - C = ${valorA - valorC}`);
    console.log(` B - C = ${valorB - valorC}`);

    if (
      (valorA + valorB < valorC &&
        valorA + valorC < valorB &&
        valorB + valorC < valorA &&
        valorA > valorB - valorC) ||
      valorB > valorA - valorC ||
      valorC > valorA - valorB
    ) {
      console.log('Os valores podem representar os lados de um triângulo');
    } else {
      console.log('Os valores não podem representar os lados de um triângulo');
    }
  }
}
