import { ExerciciosBD } from './../models/exercicios.model';
export class Exercicio18 implements ExerciciosBD {
  public numero: number = 18;
  public descricao: string = `Uma caixa de azulejos tem material suficiente para cobrir uma área de 1,5 m 2 . 
  Ler as dimensões (comprimento, largura e altura) de uma cozinha retangular, calcular e escrever a quantidade de caixas de azulejos necessárias 
  para cobrir todas as paredes. Considerar que não será descontada a área ocupada por portas e janelas.`;
  public categoria: number = 1;
  public executar() {
    console.clear();
    console.log(`Exercicio 18`);
    const caixaDeAzulejo = 1.5;
    const comprimento = Number(
      prompt('Digite o comprimento da cozinha')?.replace(',', '.').trim()
    );
    const largura = Number(
      prompt('Digite a largura da cozinha')?.replace(',', '.').trim()
    );
    const altura = Number(
      prompt('Digite a altura da cozinha')?.replace(',', '.').trim()
    );
    const metrosCubicos = comprimento * largura * altura;
    const caixasDeAzulejosNecessarias = metrosCubicos / caixaDeAzulejo;

    console.log(
      `Metros cúbicos da cozinha: ${metrosCubicos.toLocaleString('br', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })} m³`
    );
    console.log(
      `Quantidade de caixas necessárias: ${caixasDeAzulejosNecessarias.toFixed(
        0
      )} Caixa(s) necessárias`
    );
  }
}
