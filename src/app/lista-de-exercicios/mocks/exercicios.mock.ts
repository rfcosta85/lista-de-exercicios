import { Exercicio9 } from './exercicio9';
import { ExerciciosBD } from '../models/exercicios.model';
import { Exercicio6 } from './exercicio6';
import { Exercicio7 } from './exercicio7';
import { Exercicio8 } from './exercicio8';
import { Exercicio10 } from './exercicio10';
import { Exercicio11 } from './exercicio11';

export const ListaExerciciosMock: ExerciciosBD[] = [
  new Exercicio6(),
  new Exercicio7(),
  new Exercicio8(),
  new Exercicio9(),
  new Exercicio10(),
  new Exercicio11(),

  // {
  //   numero: 12,
  //   descricao:
  //     'Ler o salário mensal de uma pessoa e o percentual de reajuste, calcular e escrever o valor do salário reajustado.',
  //   categoria: 1,
  //   executar: ,
  // },
  // {
  //   numero: 13,
  //   descricao:
  //     'Ler o número de eleitores de um município e o número de votos brancos, nulos e válidos. Em seguida, calcular e escrever o percentual que cada tipo de voto representa em relação ao total de eleitores.',
  //   categoria: 1,
  //   executar: ,
  // },
  // {
  //   numero: 14,
  //   descricao:
  //     'O custo ao consumidor de um carro novo é dado pelo custo de fábrica mais os percentuais do distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que o percentual do distribuidor seja de 28% e os impostos de 45%, ler o custo de fábrica de um carro e escrever o custo final ao consumidor.',
  //   categoria: 1,
  //   executar: ,
  // },
  // {
  //   numero: 15,
  //   descricao:
  //     'Uma revendedora de carros usados paga a seus vendedores um salário fixo por mês, mais uma comissão, também fixa, para cada carro vendido e mais 5% do valor das vendas efetuadas por eles. Ler o número de carros vendidos por um vendedor, o valor total de suas vendas, o salário fixo e o valor que ele recebe por carro. Em seguida, calcular e escrever o salário mensal do vendedor.',
  //   categoria: 1,
  //   executar: ,
  // },
  // {
  //   numero: 16,
  //   descricao:
  //     'O custo do seguro contra granizo numa comunidade típica de fazendeiros é 3,5% do valor de cobertura solicitado por acre, multiplicado pelo número de acres plantados. Supondo que as possibilidades de colheitas sejam limitadas a trigo, aveia e cevada, ler a cobertura desejada e o número de acres plantados para cada uma das três plantações e calcular e escrever o custo total do prêmio do seguro.',
  //   categoria: 1,
  //   executar: ,
  // },
  // {
  //   numero: 17,
  //   descricao:
  //     'A potência necessária para iluminar adequadamente um cômodo é de 18 W/m 2 . Ler a potência de uma lâmpada e as dimensões (largura e comprimento) do cômodo, calcular e escrever o número de lâmpadas necessárias para a iluminação.',
  //   categoria: 1,
  //   executar: ,
  // },
  // {
  //   numero: 18,
  //   descricao:
  //     'Uma caixa de azulejos tem material suficiente para cobrir uma área de 1,5 m 2 . Ler as dimensões (comprimento, largura e altura) de uma cozinha retangular, calcular e escrever a quantidade de caixas de azulejos necessárias para cobrir todas as paredes. Considerar que não será descontada a área ocupada por portas e janelas.',
  //   categoria: 1,
  //   executar: () => {},
  // },
  // {
  //   numero: 19,
  //   descricao:
  //     'Um motorista de taxi deseja calcular o rendimento de seu carro na praça. Sabendo-se que o preço do combustível é de R$2,98 o litro, ler a marcação do odômetro no início e no fim do dia, o número de litros de combustível gasto e ovalor recebido dos passageiros. Em seguida, calcular e escrever a média do consumo em Km/l e o lucro líquido do dia.',
  //   categoria: 1,
  //   executar: ,
  // },
  // {
  //   numero: 20,
  //   descricao:
  //     'Uma equipe deseja calcular o número mínimo de litros de combustível, que deve ser colocado no tanque de um carro de corrida, para que este possa completar um determinado número de voltas em um circuito, até o primeiro reabastecimento. Ler o comprimento da pista (em metros), o número total de voltas a serem percorridas, o número de reabastecimentos desejados e o consumo do carro (em Km/l). Em seguida, calcular e escrever o número mínimo de litros necessários para completar as voltas até o primeiro reabastecimento. Considerar que o número de voltas entre os reabastecimentos é o mesmo.',
  //   categoria: 1,
  //   executar: ,
  // },
  // {
  //   numero: 21,
  //   descricao: 'Ler um valor e escrever se é positivo, negativo ou zero.',
  //   categoria: 2,
  //   executar: () => {},
  // },
];
