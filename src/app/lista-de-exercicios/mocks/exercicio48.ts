import { ExerciciosBD } from '../models/exercicios.model';

export class Exercicio48 implements ExerciciosBD {
  public numero: number = 48;
  public descricao: string = `Ler um conjunto de valores inteiros e positivos, calcular e escrever a média.`;
  public categoria: number = 3;
  public executar() {
    console.clear();
    console.log('Exercicío 48');
    let arrayDeNumeros = [];
    let somaArrayDeNumeros: number = 0;
    let mediaArrayDeNumeros: number = 1;
    let resposta: string = 'n';
    do {
      let coletorDeNumeros = Number(
        prompt('Digite um número')?.replace(',', '.').trim()
      );
      arrayDeNumeros.push(coletorDeNumeros);
      somaArrayDeNumeros += coletorDeNumeros;
      resposta = String(prompt('Deseja Continuar? (s/n)'));
    } while (resposta === 's');

    mediaArrayDeNumeros = somaArrayDeNumeros / arrayDeNumeros.length;

    console.log(`O numeros digitados foram: ${arrayDeNumeros}`);
    console.log(`A soma dos números digitados foi: ${somaArrayDeNumeros}`);
    console.log(`O total de número digitados foi: ${arrayDeNumeros.length}`);
    console.log(
      `A média dos numeros digitados e somados foi de: ${mediaArrayDeNumeros.toLocaleString(
        'br',
        {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }
      )}`
    );
  }
}
