import { ExerciciosBD } from './../models/exercicios.model';
export class Exercicio19 implements ExerciciosBD {
  public numero: number = 19;
  public descricao: string = `Um motorista de taxi deseja calcular o rendimento de seu carro na praça. Sabendo-se que o preço do combustível é de R$2,98 o litro, 
  ler a marcação do odômetro no início e no fim do dia, o número de litros de combustível gasto e ovalor recebido dos passageiros. Em seguida, 
  calcular e escrever a média do consumo em Km/l e o lucro líquido do dia.`;
  public categoria: number = 1;
  public executar() {
    console.clear();
    console.log('Exercicio 19');
    const precoCombustivel = 2.98;
    const odometroInicial = Number(
      prompt('Digite o valor inicial do odômetro')?.replace(',', '.').trim()
    );
    const odometroFinal = Number(
      prompt('Digite o valor final do odômetro')?.replace(',', '.').trim()
    );
    const litrosCombustivelConsumido = Number(
      prompt('Digite a quantidade de litros de combustível gasto')
        ?.replace(',', '.')
        .trim()
    );
    const valorRecebidoPelosPassageiros = Number(
      prompt('Digite o valor recebido pelos clientes')?.replace(',', '.').trim()
    );
    const kmPercorrido = odometroFinal - odometroInicial;
    const consumoMedioDeCombustivel = kmPercorrido / litrosCombustivelConsumido;
    const gastoEmCombustivelDia = litrosCombustivelConsumido * precoCombustivel;
    const lucroLiquidoDia =
      valorRecebidoPelosPassageiros - gastoEmCombustivelDia;

    console.log(
      `Odômetro inicial: ${odometroInicial.toLocaleString('br', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })} km`
    );

    console.log(
      `Odômetro final: ${odometroFinal.toLocaleString('br', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })} km`
    );

    console.log(
      `Km percorrido: ${kmPercorrido.toLocaleString('br', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })} km`
    );

    console.log(
      `Litros de combustível gasto no dia: ${litrosCombustivelConsumido.toLocaleString(
        'br',
        {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }
      )} litros`
    );

    console.log(
      `Consumo médio de combustível: ${consumoMedioDeCombustivel.toLocaleString(
        'br',
        { style: 'currency', currency: 'brl' }
      )}`
    );

    console.log(
      `Gasto em combustível no dia: ${gastoEmCombustivelDia.toLocaleString(
        'br',
        { style: 'currency', currency: 'brl' }
      )}`
    );

    console.log(
      `Valor recebido pelas corridas: ${valorRecebidoPelosPassageiros.toLocaleString(
        'br',
        { style: 'currency', currency: 'brl' }
      )}`
    );

    console.log(
      `Lucro líquido do dia: ${lucroLiquidoDia.toLocaleString('br', {
        style: 'currency',
        currency: 'brl',
      })}`
    );
  }
}
