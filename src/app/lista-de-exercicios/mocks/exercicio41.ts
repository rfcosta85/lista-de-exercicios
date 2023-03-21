import { ExerciciosBD } from '../models/exercicios.model';

export class Exercicio41 implements ExerciciosBD {
  public numero: number = 41;
  public descricao: string = `Ler um valor inteiro N e escrever a opção de pizza correspondente
    conforme a tabela a seguir: 1- muçarela, 2- calabresa, 3- portuguesa, 4- napolitana, 5- quatro quejos`;
  public categoria: number = 2;
  public executar() {
    console.clear();
    console.log('Exercicio 41');
    const saborPizza = Number(
      prompt('Digite o sabor desejado para a sua Pizza: ')
    );
    switch (saborPizza) {
      case 1:
        console.log(`${saborPizza}: Pizza sabor muçarela`);
        break;
      case 2:
        console.log(`${saborPizza}: Pizza sabor calabresa`);
        break;
      case 3:
        console.log(`${saborPizza}: Pizza sabor portuguesa`);
        break;
      case 4:
        console.log(`${saborPizza}: Pizza sabor napolitana`);
        break;
      case 5:
        console.log(`${saborPizza}: Pizza sabor quatro queijos`);
        break;
      default:
        console.log(`${saborPizza}: Valor inválido`);
    }
  }
}
