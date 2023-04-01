import { ExerciciosBD } from './../models/exercicios.model';
export class Exercicio39 implements ExerciciosBD {
  public numero: number = 39;
  public descricao: string = `Ler três valores e escrever se representam os ângulos de um triângulo. Se
sim, escrever se o triângulo é retângulo, acutângulo ou obtusângulo`;
  public categoria: number = 2;
  public executar() {
    console.clear();
    console.log('Exercicio 39');
    const fonte = `https://brasilescola.uol.com.br/matematica/classificacao-de-triangulos.htm`;
    const valor1 = Number(
      prompt('Digite o valor do primeiro número: ')?.replace(',', '.').trim()
    );
    const valor2 = Number(
      prompt('Digite o valor do segundo número: ')?.replace(',', '.').trim()
    );
    const valor3 = Number(
      prompt('Digite o valor do terceiro número: ')?.replace(',', '.').trim()
    );

    if (valor1 <= 180 && valor2 <= 180 && valor3 <= 180) {
      if (valor1 < 90 && valor2 < 90 && valor3 < 90) {
        console.log(
          `Um triângulo Acutângulo precisa ter os 3 lados com ângulos menores que 90, então:`
        );
        console.log(`lado A: ${valor1}°`);
        console.log(`Lado B: ${valor2}°`);
        console.log(`Lado C: ${valor3}°`);
        console.log(`Temos um triângulo acutângulo`);
      } else if (valor1 === 90 || valor2 === 90 || valor3 === 90) {
        console.log(
          `Um triângulo é retângulo quando um de seus ângulos é igual a 90°`
        );
        console.log(`lado A: ${valor1}°`);
        console.log(`Lado B: ${valor2}°`);
        console.log(`Lado C: ${valor3}°`);
        console.log(`Temos um triângulo retângulo`);
      } else if (valor1 > 90 || valor2 > 90 || valor3 > 90) {
        console.log(
          `Um triângulo é obtusângulo quando um dos seus ângulos é maior que 90°`
        );
        console.log(`lado A: ${valor1}°`);
        console.log(`Lado B: ${valor2}°`);
        console.log(`Lado C: ${valor3}°`);
        console.log(`Temos um triângulo obsutsângulo`);
      }
    } else {
      console.log(
        `Os valores de um ângulo externo não podem ser maiores que 180°, portanto, não temos um triângulo`
      );
    }

    console.log(`Fonte: Brasil escola: ${fonte}`);
  }
}
