import { ExerciciosBD } from '../models/exercicios.model';

export class Exercicio13 implements ExerciciosBD {
  public numero: number = 13;
  public descricao: string =
    'Ler o número de eleitores de um município e o número de votos brancos, nulos e válidos. Em seguida, calcular e escrever o percentual que cada tipo de voto representa em relação ao total de eleitores.';
  public categoria: number = 1;
  public executar() {
    console.clear();
    console.log('Exercicio 13');
    const totalEleitores = Number(
      prompt('Digite o total de eleitores do município: ')
    );
    const votosEmBranco = Number(
      prompt('Digite o número de votos em branco: ')
    );
    const votosNulos = Number(prompt('Digite a quantidade de votos nulos: '));
    const votosValidos = totalEleitores - (votosEmBranco + votosNulos);
    const votosEmBrancoPercentual = (votosEmBranco / totalEleitores) * 100;
    const votosNulosPercentual = (votosNulos / totalEleitores) * 100;
    const votosValidosPercentual = (votosValidos / totalEleitores) * 100;

    console.log(`Total de eleitores: ${totalEleitores.toLocaleString('br')}`);

    console.log(
      `Total de votos em Branco: ${votosEmBranco.toLocaleString(
        'br'
      )}, representando ${votosEmBrancoPercentual.toLocaleString('br', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}% dos votos`
    );

    console.log(
      `Total de votos nulos: ${votosNulos.toLocaleString(
        'br'
      )}, representando ${votosNulosPercentual.toLocaleString('br', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}% dos votos`
    );

    console.log(
      `Total de votos válidos: ${votosValidos.toLocaleString(
        'br'
      )}, representando ${votosValidosPercentual.toLocaleString('br', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}% dos votos`
    );
  }
}
