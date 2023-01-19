import { ExerciciosBD } from './../models/exercicios.model';

export class Exercicio15 implements ExerciciosBD {
  public numero: number = 15;
  public descricao: string = `Uma revendedora de carros usados paga a seus vendedores um salário fixo por mês, mais uma comissão, também fixa, para cada carro vendido e mais 5% do valor das vendas efetuadas por eles. Ler o número de carros vendidos por um vendedor, o valor total de suas vendas,
   o salário fixo e o valor que ele recebe por carro. Em seguida, calcular e escrever o salário mensal do vendedor.`;
  public categoria: number = 1;
  public executar() {
    console.clear();
    console.log('Exercicio 15');
    const salario = Number(
      prompt('Digite o salário: ')?.replace(',', '.').trim()
    );
    const comissaoTotalDeVendas = 0.05;
    const totalDeCarrosVendidos = Number(
      prompt('Digite o total de carros vendidos: ')
    );
    const valorTotalDeVendas = Number(
      prompt('Digite o valor total das vendas: ')?.replace(',', '.').trim()
    );
    const valorPorCarroVendido = Number(
      prompt('Digite o valor recebido por carro vendido')
        ?.replace(',', '.')
        .trim()
    );
    const comissaoPorCarroVendido =
      totalDeCarrosVendidos * valorPorCarroVendido;
    const comissaoPeloTotalDeVendas =
      comissaoPorCarroVendido * comissaoTotalDeVendas + comissaoPorCarroVendido;
    const salarioMes = salario + comissaoPeloTotalDeVendas;
    console.log(
      `O salário do mês será de: ${salarioMes.toLocaleString('br', {
        style: 'currency',
        currency: 'brl',
      })}`
    );
  }
}
