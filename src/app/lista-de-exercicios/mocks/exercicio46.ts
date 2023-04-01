import { ExerciciosBD } from '../models/exercicios.model';

export class Exercicio46 implements ExerciciosBD {
  public numero: number = 46;
  public descricao: string = `Ler um conjunto de valores inteiros e positivos, calcular e escrever a soma e o produto desses valores.`;
  public categoria: number = 3;
  public executar() {
    console.clear();
    console.log('Exercicio 46');
    let resposta: any = 'sim';
    let arrayNumeros = [];
    let somaNumeros = 0;
    do {
      const inteiros = Number(prompt('Digite um numero'));
      let getResposta = prompt('Deseja continuar? ')
        ?.toLocaleLowerCase()
        .trim();
      resposta = getResposta;
      arrayNumeros.push(inteiros);
      somaNumeros += inteiros;
    } while (resposta === 'sim');

    console.log(`Numeros informados: ${arrayNumeros} `);

    console.log(
      `A soma dos números informados foi: ${somaNumeros.toLocaleString(
        'pt-BR'
      )}`
    );
  }
}
