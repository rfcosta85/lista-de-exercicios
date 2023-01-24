import { ExerciciosBD } from './../models/exercicios.model';
export class Exercicio17 implements ExerciciosBD {
  public numero: number = 17;
  public descricao: string = `A potência necessária para iluminar adequadamente um cômodo é de 18 W/m 2 . 
  Ler a potência de uma lâmpada e as dimensões (largura e comprimento) do cômodo, calcular e escrever o número de lâmpadas necessárias para a iluminação.`;
  public categoria: number = 1;
  public executar() {
    console.clear();
    console.log('Exercício 17');
    const potenciaLampada = Number(
      prompt('Digite a potência da Lâmpada')?.replace(',', '.').trim()
    );
    const larguraDoComodo = Number(
      prompt('Digite a largura do cômodo')?.replace(',', '.').trim()
    );
    const comprimentoDoComodo = Number(
      prompt('Digite o comprimento do cômodo')?.replace(',', '.').trim()
    );
    const metroQuadrado = larguraDoComodo * comprimentoDoComodo;
    const lampadasNecessarias = metroQuadrado / potenciaLampada;

    console.log(
      `Metros quadrados do cômodo: ${metroQuadrado.toLocaleString('br', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })} m²`
    );
    console.log(
      `Lâmpadas necessárias para iluminar o ambiente: ${lampadasNecessarias.toFixed(
        0
      )} lâmpadas`
    );
  }
}
