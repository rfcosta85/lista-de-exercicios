import { ExerciciosBD } from './../models/exercicios.model';

export class Exercicio16 implements ExerciciosBD {
  public numero: number = 16;
  public descricao: string = `O custo do seguro contra granizo numa comunidade típica de fazendeiros é 3,5% do valor de cobertura solicitado por acre, multiplicado pelo número de acres plantados. Supondo que as possibilidades de colheitas sejam limitadas a trigo, aveia e cevada,
   ler a cobertura desejada e o número de acres plantados para cada uma das três plantações e calcular e escrever o custo total do prêmio do seguro.`;
  public categoria: number = 1;
  public executar() {
    console.clear();
    console.log('Exercício 16');
    const custoSeguro = 0.035;
    const valorDaCobertura = Number(
      prompt('Digite o valor da Cobertura desejado: ')?.replace(',', '.').trim()
    );
    const acresPlantadosTrigo = Number(
      prompt('Digite a cobertura do trigo em acres: ')?.replace(',', '.').trim()
    );
    const acresPlantadosAveia = Number(
      prompt('Digite a cobertura de aveia em acres: ')?.replace(',', '.').trim()
    );
    const acresPlantadosCevada = Number(
      prompt('Digite a cobertura de cevada em acres: ')
        ?.replace(',', '.')
        .trim()
    );
    const acres =
      acresPlantadosTrigo + acresPlantadosAveia + acresPlantadosCevada;
    const custototalPremioSeguro = acres * valorDaCobertura * custoSeguro;
    console.log(
      `O prêmio do seguro será de: ${custototalPremioSeguro.toLocaleString(
        'br',
        { style: 'currency', currency: 'brl' }
      )}`
    );
  }
}
