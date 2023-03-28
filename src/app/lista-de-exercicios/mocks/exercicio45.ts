import { ExerciciosBD } from '../models/exercicios.model';

export class Exercicio45 implements ExerciciosBD {
  public numero: number = 45;
  public descricao: string = `Ler a idade de um nadador e escrever a qual categoria ele pertence, de acordo com a tabela a seguir:
  idade: 5 a 7, categoria: infatil A, 8 a 11, infantil B, 12 a 13 Juvenil A, 14 a 17 Juvenil B, 18 ou mais adulto`;
  public categoria: number = 2;
  public executar() {
    console.clear();
    console.log('Exercicio 45');
    const idade = Number(prompt('Digite a sua idade: '));
    if (idade > 4 && idade < 8) {
      console.log(
        `Você tem: ${idade} anos de idade e a sua categoria é infantil A`
      );
    } else if (idade > 7 && idade <= 11) {
      console.log(
        `Você tem: ${idade} anos de idade e a sua categoria é infantil B`
      );
    } else if (idade > 11 && idade <= 13) {
      console.log(
        `Você tem: ${idade} anos de idade e a sua categoria é Juvenil A`
      );
    } else if (idade > 13 && idade <= 17) {
      console.log(
        `Você tem: ${idade} anos de idade e a sua categoria é Juvenil B`
      );
    } else if (idade > 17) {
      console.log(
        `Você tem: ${idade} anos de idade e a sua categoria é Adulto`
      );
    } else {
      console.log(
        `Você tem: ${idade} anos de idade você não tem idade para competir`
      );
    }
  }
}
