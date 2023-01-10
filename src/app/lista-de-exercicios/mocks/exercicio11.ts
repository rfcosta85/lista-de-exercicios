import { ExerciciosBD } from './../models/exercicios.model';
export class Exercicio11 implements ExerciciosBD {
  public numero: number = 11;
  public descricao: string =
    'Ler um valor R correspondente ao raio de uma esfera, calcular e escrever o seu volume e a sua área.';
  public categoria: number = 1;
  public executar() {
    console.clear();
    console.log('Exercício 11');
    const r = Number(prompt('Digite o valor do raio a ser calculado: '));
    const pi = 3.14;
    const area = pi * r ** 2;
    const volume = 4 * pi * (r ** 3 / 3);
    console.log(`Area = ${area} \nVolume = ${volume.toLocaleString('br')}`);
  }
}
