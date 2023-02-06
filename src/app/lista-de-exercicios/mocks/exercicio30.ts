import { ExerciciosBD } from './../models/exercicios.model';
export class Exercicio30 implements ExerciciosBD {
  public numero: number = 30;
  public descricao: string = `Ler o ano atual e o ano de nascimento de uma pessoa e escrever uma
  mensagem dizendo se ela pode ou não votar nas eleições do ano atual.`;
  public categoria: number = 2;
  public executar() {
    console.clear();
    console.log(`Exercicio 30`);
    const anoAtual = Number(prompt('Digite o ano atual: ')?.trim());
    const anoNascimento = Number(
      prompt('Digite o ano de nascimento: ')?.trim()
    );
    const idade = anoAtual - anoNascimento;

    if (idade >= 18) {
      console.log(`Você tem ${idade} anos e pode votar.`);
    } else {
      console.log(`Você tem ${idade} anos e não pode votar.`);
    }
  }
}
