import { ExerciciosBD } from '../models/exercicios.model';

export class Exercicio37 implements ExerciciosBD {
  public numero: number = 37;
  public descricao: string = `Ler a idade de dois homens e de duas mulheres, calcular e escrever a
soma das idades do homem mais velho e da mulher mais nova e o produto das
idades do homem mais novo e da mulher mais nova.`;
  public categoria: number = 2;
  public executar() {
    console.clear();
    console.log(`Exercicio 37`);
    const idadeHomem1 = Number(prompt('Digite a idade do primeiro homem: '));
    const idadeHomem2 = Number(prompt('Digite a idade do segundo homem: '));
    const idadeMulher1 = Number(prompt('Digite a idade da primeira mulher: '));
    const idadeMulher2 = Number(prompt('Digite a idade da segunda mulher: '));

    console.log(`===SOMA===`);

    if (idadeHomem1 > idadeHomem2 && idadeMulher1 < idadeMulher2) {
      const somaIdadeHomem1 = idadeHomem1 + idadeMulher1;
      console.log(`Idade homem mais velho: ${idadeHomem1}`);
      console.log(`Idade mulher mais nova ${idadeMulher1}`);
      console.log(
        `A soma da idade do Homem mais velho e mulher mais nova é de: ${somaIdadeHomem1} anos`
      );
    } else if (idadeHomem1 > idadeHomem2 && idadeMulher1 > idadeMulher2) {
      const somaIdadeHomem1 = idadeHomem1 + idadeMulher2;
      console.log(`Idade homem mais velho: ${idadeHomem1}`);
      console.log(`Idade mulher mais nova: ${idadeMulher2}`);
      console.log(
        `A soma da idade do homem mais velho e mulher mais nova é de: ${somaIdadeHomem1} anos`
      );
    } else if (idadeHomem1 < idadeHomem2 && idadeMulher1 < idadeMulher2) {
      const somaIdadeHomem2 = idadeHomem2 + idadeMulher1;
      console.log(`Idade homem mais velho: ${idadeHomem2}`);
      console.log(`Idade mulher mais nova: ${idadeMulher1}`);
      console.log(
        `A soma da idade do homem mais velho e mulher mais nova é de ${somaIdadeHomem2} anos`
      );
    } else if (idadeHomem1 < idadeHomem2 && idadeMulher1 > idadeMulher2) {
      const somaIdadeHomem2 = idadeHomem2 + idadeMulher2;
      console.log(`Idade homem mais velho: ${idadeHomem2}`);
      console.log(`Idade mulher mais nova: ${idadeMulher2}`);
      console.log(
        `A soma da idade do homem mais velho e mulher mais nova é de ${somaIdadeHomem2} anos`
      );
    }

    console.log(`===PRODUTO===`);

    if (idadeHomem1 < idadeHomem2 && idadeMulher1 < idadeMulher2) {
      const produtoIdadeHomem1 = idadeHomem1 * idadeMulher1;
      console.log(`Idade homem mais novo: ${idadeHomem1}`);
      console.log(`Idade mulher mais nova: ${idadeMulher1}`);
      console.log(
        `A multiplicação da idade do homem mais novo e mulher mais nova é de ${produtoIdadeHomem1} anos`
      );
    } else if (idadeHomem1 > idadeHomem2 && idadeMulher1 > idadeMulher2) {
      const produtoIdadeHomem2 = idadeHomem2 * idadeMulher2;
      console.log(`Idade homem mais novo: ${idadeHomem2}`);
      console.log(`Idade mulher mais nova: ${idadeMulher2}`);
      console.log(
        `A multiplicação da idade do homem mais novo e mulher mais nova é de ${produtoIdadeHomem2} anos`
      );
    } else if (idadeHomem1 < idadeHomem2 && idadeMulher1 > idadeMulher2) {
      const produtoIdadeHomem1 = idadeHomem1 * idadeMulher2;
      console.log(`Idade homem mais novo: ${idadeHomem1}`);
      console.log(`Idade mulher mais nova: ${idadeMulher2}`);
      console.log(
        `A multiplicação da idade do homem mais novo e mulher mais nova é de ${produtoIdadeHomem1} anos`
      );
    } else if (idadeHomem1 > idadeHomem2 && idadeMulher1 < idadeMulher2) {
      const produtoIdadeHomem2 = idadeHomem2 * idadeMulher1;
      console.log(`Idade homem mais novo: ${idadeHomem2}`);
      console.log(`Idade mulher mais nova: ${idadeMulher1}`);
      console.log(
        `A multiplicação da idade do homem mais novo e mulher mais nova é de ${produtoIdadeHomem2} anos`
      );
    }
  }
}
