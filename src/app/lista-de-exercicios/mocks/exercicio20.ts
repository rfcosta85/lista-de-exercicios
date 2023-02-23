import { ExerciciosBD } from './../models/exercicios.model';
export class Exercicio20 implements ExerciciosBD {
  public numero: number = 20;
  public descricao: string = `Uma equipe deseja calcular o número mínimo de litros de combustível, 
  que deve ser colocado no tanque de um carro de corrida, para que este possa completar um determinado número de voltas em um circuito, até o primeiro reabastecimento. Ler o comprimento da pista (em metros), o número total de voltas a serem percorridas, o número de reabastecimentos desejados e o consumo do carro (em Km/l). Em seguida, calcular e escrever o 
  número mínimo de litros necessários para completar as voltas até o primeiro reabastecimento. Considerar que o número de voltas entre os reabastecimentos é o mesmo.
  (AJUSTADO)`;
  public categoria: number = 1;
  public executar() {
    console.clear();
    console.log('Exercicio 20');
    const comprimentoPista = Number(
      prompt('Digite o comprimento da pista em Km')?.replace(',', '.').trim()
    );
    const numeroDeVoltasASerPercorrida = Number(
      prompt('Digite o número total de voltas a ser percorrida')
        ?.replace(',', '.')
        .trim()
    );
    const numeroDeReabastecimentos = Number(
      prompt('Digite a quantidade de reabastecimentos programada')
        ?.replace(',', '.')
        .trim()
    );
    const consumoDoCarro = Number(
      prompt('Digite o consumo em Km/l do veículo')?.replace(',', '.').trim()
    );
    const consumoPorVolta = comprimentoPista / consumoDoCarro;
    const litrosNecessariosParaConcluirACorrida =
      consumoPorVolta * numeroDeVoltasASerPercorrida;
    const primeiraParada =
      (comprimentoPista * numeroDeVoltasASerPercorrida) /
      numeroDeReabastecimentos /
      comprimentoPista;

    const litrosPrimeiraParada = consumoPorVolta * primeiraParada;

    console.log(
      `Comprimento da Pista: ${comprimentoPista.toLocaleString('br')} km`
    );

    console.log(
      `Número de paradas Programadas: ${numeroDeReabastecimentos} paradas`
    );

    console.log(
      `Consumo de combustível por volta: ${consumoPorVolta.toLocaleString(
        'br',
        { minimumFractionDigits: 2, maximumFractionDigits: 2 }
      )} litros`
    );

    console.log(
      `Litros necessários para conclusão da corrida: ${litrosNecessariosParaConcluirACorrida.toLocaleString(
        'br',
        { minimumFractionDigits: 2, maximumFractionDigits: 2 }
      )} litros`
    );

    console.log(
      `Litros necessários até a primeira parada: ${litrosPrimeiraParada.toLocaleString(
        'br'
      )} litros`
    );

    console.log(`Primeira Parada: volta ${primeiraParada.toFixed(0)}`);
  }
}
