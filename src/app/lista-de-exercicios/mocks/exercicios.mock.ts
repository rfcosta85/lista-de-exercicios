import { Exercicio19 } from './exercicio19';
import { Exercicio18 } from './exercicio18';
import { Exercicio17 } from './exercicio17';
import { ExerciciosBD } from '../models/exercicios.model';
import { Exercicio6 } from './exercicio6';
import { Exercicio7 } from './exercicio7';
import { Exercicio8 } from './exercicio8';
import { Exercicio9 } from './exercicio9';
import { Exercicio10 } from './exercicio10';
import { Exercicio11 } from './exercicio11';
import { Exercicio12 } from './exercicio12';
import { Exercicio13 } from './exercicio13';
import { Exercicio14 } from './exercicio14';
import { Exercicio15 } from './exercicio15';
import { Exercicio16 } from './exercicio16';

export const ListaExerciciosMock: ExerciciosBD[] = [
  new Exercicio6(),
  new Exercicio7(),
  new Exercicio8(),
  new Exercicio9(),
  new Exercicio10(),
  new Exercicio11(),
  new Exercicio12(),
  new Exercicio13(),
  new Exercicio14(),
  new Exercicio15(),
  new Exercicio16(),
  new Exercicio17(),
  new Exercicio18(),
  new Exercicio19(),

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
