import { ExerciciosBD } from './../models/exercicios.model';
export class Exercicio35 implements ExerciciosBD {
  public numero: number = 35;
  public descricao: string = `Ler o salário fixo e o valor das vendas efetuadas por um vendedor de uma
  empresa. Sabendo-se que ele recebe uma comissão de 3% sobre o total das
  vendas, até R$1.500,00, mais 5% sobre o que ultrapassar este valor, calcular e
  escrever o salário total do funcionário.`;
  public categoria: number = 2;
  public executar() {
    console.clear();
    console.log(`Exercicio 35`);
    const salarioFixo = Number(
      prompt('Digite o salário fixo: ')?.replace(',', '.').trim()
    );
    const vendaTotaisEmReais = Number(
      prompt('Digite o valor das vendas: ')?.replace(',', '.').trim()
    );

    const limiteDaComissao3Porcento = 1500;
    if (vendaTotaisEmReais > limiteDaComissao3Porcento) {
      const comissaoTresPorcento = 0.03;
      const comissaoCincoPorcento = 0.05;
      const diferencaComissao = vendaTotaisEmReais - limiteDaComissao3Porcento;
      const calculoComissaoTresPorcento =
        vendaTotaisEmReais - diferencaComissao;
      const calculoComissaoCincoPorcento =
        vendaTotaisEmReais - calculoComissaoTresPorcento;
      const comissaoEmReaisTresPorcento =
        calculoComissaoTresPorcento * comissaoTresPorcento;
      const comissaoEmReaisCincoPorcento =
        calculoComissaoCincoPorcento * comissaoCincoPorcento;
      const comissaoEmReais =
        comissaoEmReaisTresPorcento + comissaoEmReaisCincoPorcento;
      const salarioTotal = salarioFixo + comissaoEmReais;
      console.log(
        `Salário fixo: ${salarioFixo.toLocaleString('br', {
          style: 'currency',
          currency: 'BRL',
        })}`
      );
      console.log(
        `Valor das vendas: ${vendaTotaisEmReais.toLocaleString('br', {
          style: 'currency',
          currency: 'BRL',
        })}`
      );
      console.log(`Comissão: ${comissaoCincoPorcento * 100}%`);

      console.log(
        `Diferenca das comissões: ${diferencaComissao.toLocaleString('br', {
          style: 'currency',
          currency: 'BRL',
        })}`
      );

      console.log(
        `Valores 3%: ${calculoComissaoTresPorcento.toLocaleString('br', {
          style: 'currency',
          currency: 'BRL',
        })}`
      );

      console.log(
        `Valores 5%: ${calculoComissaoCincoPorcento.toLocaleString('br', {
          style: 'currency',
          currency: 'BRL',
        })}`
      );

      console.log(
        `Ganhos com a comissão de 3%: ${comissaoEmReaisTresPorcento.toLocaleString(
          'br',
          { style: 'currency', currency: 'BRL' }
        )}`
      );

      console.log(
        `Ganhos com a comissão de 5%: ${comissaoEmReaisCincoPorcento.toLocaleString(
          'br',
          { style: 'currency', currency: 'BRL' }
        )}`
      );

      console.log(
        `Comissão em Reais: ${comissaoEmReais.toLocaleString('br', {
          style: 'currency',
          currency: 'BRL',
        })}`
      );
      console.log(
        `Salário total: ${salarioTotal.toLocaleString('br', {
          style: 'currency',
          currency: 'BRL',
        })}`
      );
    } else {
      const comissao = 0.03;
      const comissaoEmReais = vendaTotaisEmReais * comissao;
      const salarioTotal = salarioFixo + comissaoEmReais;
      console.log(
        `Salário fixo: ${salarioFixo.toLocaleString('br', {
          style: 'currency',
          currency: 'BRL',
        })}`
      );
      console.log(
        `Valor das vendas: ${vendaTotaisEmReais.toLocaleString('br', {
          style: 'currency',
          currency: 'BRL',
        })}`
      );
      console.log(`Comissão: ${comissao * 100}%`);

      console.log(
        `Comissão em Reais: ${comissaoEmReais.toLocaleString('br', {
          style: 'currency',
          currency: 'BRL',
        })}`
      );
      console.log(
        `Salário total: ${salarioTotal.toLocaleString('br', {
          style: 'currency',
          currency: 'BRL',
        })}`
      );
    }
  }
}
