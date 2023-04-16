import { ExerciciosBD } from './../models/exercicios.model';
export class Exercicio49 implements ExerciciosBD {
  public numero: number = 49;
  public descricao: string = `Ler as notas da primeira e da segunda avaliações de vários alunos, calcular e escrever a média e escrever também 
   uma mensagem dizendo se o aluno foi aprovado, reprovado ou se deverá fazer a terceira avaliação. 
   Os critérios são os seguintes: média  6: aprovado média  4 e média < 6: 3ª avaliação média < 4: reprovado`;
  public categoria: number = 3;
  public executar() {
    console.clear();
    console.log('Exercicio 49');

    let arrayNotas1 = [];
    let arrayNotas2 = [];
    let arrayMedias = [];
    let somaNotas = 0;
    let mediaNotas = 0;
    let resposta = 'n';

    do {
      let coletaNotas1 = Number(
        prompt('Digite a Primeira nota do aluno:')?.replace(',', '.').trim()
      );
      arrayNotas1.push(coletaNotas1);

      let coletaNotas2 = Number(
        prompt('Digite a segunda nota do aluno:')?.replace(',', '.').trim()
      );
      arrayNotas2.push(coletaNotas2);

      resposta = String(prompt('Deseja continuar?'));
    } while (resposta === 's');

    console.log(`Notas da primeira prova: ${arrayNotas1}`);
    console.log(`Notas da segunda prova: ${arrayNotas2}`);

    for (let i = 0; i < arrayNotas1.length; i++) {
      somaNotas = 0;
      mediaNotas = 0;
      somaNotas += arrayNotas1[i];
      somaNotas += arrayNotas2[i];
      mediaNotas += somaNotas / 2;
      arrayMedias.push(mediaNotas);
    }

    console.log(`Array das médias: ${arrayMedias}`);

    for (let i = 0; i < arrayMedias.length; i++) {
      if (arrayMedias[i] >= 6) {
        console.log(
          `As notas do aluno ${i + 1} foram: nota 1: ${
            arrayNotas1[i]
          } e nota 2: ${arrayNotas2[i]}`
        );
        console.log(`A média do aluno ${i + 1} foi: ${arrayMedias[i]}`);
        console.log('Aluno Aprovado!');
      } else if (arrayMedias[i] >= 4 && arrayMedias[i] < 6) {
        console.log(
          `As notas do aluno ${i + 1} foram: nota 1: ${arrayNotas1[i]} e ${
            arrayNotas2[i]
          }`
        );
        console.log(`A média do aluno ${i + 1} foi: ${arrayMedias[i]}`);
        console.log('Aluno precisa realizar a 3° avaliação');
      } else {
        console.log(
          `As notas do aluno ${i + 1} foram: nota 1: ${arrayNotas1[i]} e ${
            arrayNotas2[i]
          }`
        );
        console.log(`A média do aluno ${i + 1} foi: ${arrayMedias[i]}`);
        console.log('Aluno reprovado!');
      }
    }
  }
}
