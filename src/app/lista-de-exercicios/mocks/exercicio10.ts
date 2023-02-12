import { ExerciciosBD } from './../models/exercicios.model';
export class Exercicio10 implements ExerciciosBD {
  public numero: number = 10;
  public descricao: string =
    'Ler os valores S1, S2 e S3 correspondentes aos comprimentos dos três lados de um triângulo, calcular e escrever a sua área. A área do triângulo é dada por: (AJUSTADO)';
  public categoria: number = 1;
  public executar() {
    console.clear();
    console.log('Exercicio 10');
    const s1 = Number(
      prompt('Leia o primeiro lado do triângulo')?.replace(',', '.').trim()
    );
    const s2 = Number(
      prompt('Leia o segundo lado do triângulo')?.replace(',', '.').trim()
    );
    const s3 = Number(
      prompt('Leia o terceiro lado do triângulo')?.replace(',', '.').trim()
    );
    const ladosDoTriangulo = (s1 + s2 + s3) / 2;
    const raizQuadrada = 1 / 2;
    const area =
      ladosDoTriangulo *
      (ladosDoTriangulo - s1) *
      (ladosDoTriangulo - s2) *
      (ladosDoTriangulo - s3) *
      raizQuadrada;
    console.log(
      `A área do triângulo será de: ${area.toLocaleString('br', {
        minimumFractionDigits: 3,
        maximumFractionDigits: 3,
      })}`
    );
  }
}
