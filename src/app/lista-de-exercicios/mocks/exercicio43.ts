import { ExerciciosBD } from '../models/exercicios.model';

export class Exercicio43 implements ExerciciosBD {
  public numero: number = 43;
  public descricao: string = `Ler dois valores X e Y, escolher e efetuar a operação conforme a tabela a seguir 
    1- adicao, 2- subtracao, 3- multiplicacao, 4- divisão, 5- potenciação`;
  public categoria: number = 2;
  public executar() {
    console.clear();
    console.log('Exercicio 43');
    const x = Number(prompt('Leia o valor de X: ')?.replace(',', '.').trim());
    const y = Number(prompt('Leia o valor de Y: ')?.replace(',', '.').trim());
    const operacao = Number(
      prompt('Conforme a tabela, digite a operação que seja realizar: ')
    );

    switch (operacao) {
      case 1:
        console.log(`${x} + ${y} = ${x + y}`);
        break;
      case 2:
        console.log(`${x} - ${y} = ${x - y}`);
        break;
      case 3:
        console.log(`${x} x ${y} = ${x * y}`);
        break;
      case 4:
        console.log(`${x} / ${y} = ${x / y}`);
        break;
      case 5:
        console.log(`${x} ^ ${y} = ${x ** y}`);
        break;
    }
  }
}
