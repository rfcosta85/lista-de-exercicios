import { ExerciciosBD } from './../models/exercicios.model';
export class Exercicio31 implements ExerciciosBD {
  public numero: number = 31;
  public descricao: string = `Numa mercearia as maçãs custam R$1,30 cada, se forem compradas
  menos de doze, e R$1,00 se forem compradas pelo menos doze. Ler o número
  de maçãs compradas, calcular e escrever o custo total da compra.`;
  public categoria: number = 2;
  public executar() {
    console.clear();
    console.log(`Exercicio 31`);
    const quantidade = Number(prompt('Digite a quantidade de maçãs: ')?.trim());

    if (quantidade < 12) {
      const preco = 1.3;
      const totalAPagar = quantidade * preco;
      console.log(
        `Preço por unidade: ${preco.toLocaleString('br', {
          style: 'currency',
          currency: 'BRL',
        })}`
      );

      console.log(
        `Você comprou ${quantidade} maçãs e irá pagar: ${totalAPagar.toLocaleString(
          'br',
          { style: 'currency', currency: 'BRL' }
        )}`
      );
    } else {
      const preco = 1.0;
      const totalAPagar = quantidade * preco;
      console.log(
        `Preço por unidade: ${preco.toLocaleString('br', {
          style: 'currency',
          currency: 'BRL',
        })}`
      );
      console.log(
        `Você comprou ${quantidade} maçãs e irá pagar: ${totalAPagar.toLocaleString(
          'br',
          { style: 'currency', currency: 'BRL' }
        )}`
      );
    }
  }
}
