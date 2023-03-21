import { ExerciciosBD } from '../models/exercicios.model';

export class Exercicio42 implements ExerciciosBD {
  public numero: number = 42;
  public descricao: string = `Ler um valor inteiro N e escrever o nome do mês correspondente.`;
  public categoria: number = 2;
  public executar() {
    console.clear();
    console.log('Exericio 42');
    const mes = Number(prompt('Digite o mês: '));
    switch (mes) {
      case 1:
        console.log(`${mes} - Janeiro`);
        break;
      case 2:
        console.log(`${mes} - Fevereiro`);
        break;
      case 3:
        console.log(`${mes} - Março`);
        break;
      case 4:
        console.log(`${mes} - Abril`);
        break;
      case 5:
        console.log(`${mes} - Maio`);
        break;
      case 6:
        console.log(`${mes} - Junho`);
        break;
      case 7:
        console.log(`${mes} - Julho`);
        break;
      case 8:
        console.log(`${mes} - Agosto`);
        break;
      case 9:
        console.log(`${mes} - Setembro`);
        break;
      case 10:
        console.log(`${mes} - Outubro`);
        break;
      case 11:
        console.log(`${mes} - Novembro`);
        break;
      case 12:
        console.log(`${mes} - Dezembro`);
        break;
      default:
        console.log(`${mes} - Valor inválido`);
    }
  }
}
