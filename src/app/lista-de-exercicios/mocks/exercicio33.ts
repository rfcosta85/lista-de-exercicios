import { ExerciciosBD } from './../models/exercicios.model';
export class Exercicio33 implements ExerciciosBD {
  public numero: number = 33;
  public descricao: string = `Ler as notas da primeira e da segunda avaliações de um aluno, calcular e
  escrever a média e escrever também uma mensagem dizendo se o aluno foi
  aprovado, reprovado ou se deverá fazer a terceira avaliação. Os critérios são
  os seguintes:
  média  6: aprovado
  média  4 e média < 6: 3ª avaliação
  média < 4: reprovado`;
  public categoria: number = 2;
  public executar() {
    console.clear();
    console.log(`Exercicio 33`);
    const primeiraAvaliacao = Number(
      prompt(`Digite a nota da primeira avaliação`)?.replace(',', '.').trim()
    );
    const segundaAvaliacao = Number(
      prompt(`Digite a nota da segunda avaliação`)?.replace(',', '.').trim()
    );
    const media = (primeiraAvaliacao + segundaAvaliacao) / 2;

    if (media >= 6) {
      console.log(
        `Nota da primeira prova: ${primeiraAvaliacao.toLocaleString('br', {
          minimumFractionDigits: 1,
          maximumFractionDigits: 1,
        })}`
      );
      console.log(
        `Nota da segunda prova: ${segundaAvaliacao.toLocaleString('br', {
          minimumFractionDigits: 1,
          maximumFractionDigits: 1,
        })}`
      );
      console.log(
        `Média do aluno: ${media.toLocaleString('br', {
          minimumFractionDigits: 1,
          maximumFractionDigits: 1,
        })}`
      );
      console.log(`O aluno foi aprovado`);
    } else if (media >= 4 && media < 6) {
      console.log(
        `Nota da primeira prova: ${primeiraAvaliacao.toLocaleString('br', {
          minimumFractionDigits: 1,
          maximumFractionDigits: 1,
        })}`
      );
      console.log(
        `Nota da segunda prova: ${segundaAvaliacao.toLocaleString('br', {
          minimumFractionDigits: 1,
          maximumFractionDigits: 1,
        })}`
      );
      console.log(
        `Média do aluno: ${media.toLocaleString('br', {
          minimumFractionDigits: 1,
          maximumFractionDigits: 1,
        })}`
      );
      console.log(`O aluno deverá fazer a terceira avaliação`);
    } else {
      console.log(
        `Nota da primeira prova: ${primeiraAvaliacao.toLocaleString('br', {
          minimumFractionDigits: 1,
          maximumFractionDigits: 1,
        })}`
      );
      console.log(
        `Nota da segunda prova: ${segundaAvaliacao.toLocaleString('br', {
          minimumFractionDigits: 1,
          maximumFractionDigits: 1,
        })}`
      );
      console.log(
        `Média do aluno: ${media.toLocaleString('br', {
          minimumFractionDigits: 1,
          maximumFractionDigits: 1,
        })}`
      );
      console.log(`O aluno foi reprovado`);
    }
  }
}
