import { ExerciciosBD } from './../models/exercicios.model';

export class Exercicio14 implements ExerciciosBD {
  public numero: number = 14;
  public descricao: string = `O custo ao consumidor de um carro novo é dado pelo custo de fábrica mais os percentuais do distribuidor e dos impostos (aplicados ao custo de fábrica).
   Supondo que o percentual do distribuidor seja de 28% e os impostos de 45%, ler o custo de fábrica de um carro e escrever o custo final ao consumidor.`;
  public categoria: number = 1;
  public executar() {
    console.clear();
    console.log('Exercicio 14');
    const custoCarro = Number(
      prompt('Digite o valor do carro: ')?.replace(',', '.')
    );
    const percentualDistribuidor = 0.3;
    const impostos = 0.45;
    const valorDoDistribuidor = custoCarro * percentualDistribuidor;
    const valorDosImpostos = custoCarro * impostos;
    const valorFinal = valorDosImpostos + valorDoDistribuidor + custoCarro;
    console.log(
      `Custo de fabricação do veículo: ${custoCarro.toLocaleString('br', {
        style: 'currency',
        currency: 'brl',
      })}`
    );
    console.log(
      `Taxa do distribuidor: ${valorDoDistribuidor.toLocaleString('br', {
        style: 'currency',
        currency: 'brl',
      })}`
    );
    console.log(
      `Taxa do imposto: ${valorDosImpostos.toLocaleString('br', {
        style: 'currency',
        currency: 'brl',
      })}`
    );
    console.log(
      `Custo final ao consumidor: R$ ${valorFinal.toLocaleString('br', {
        style: 'currency',
        currency: 'brl',
      })}`
    );
  }
}
