import { ExerciciosBD } from './../models/exercicios.model';
export class Exercicio22 implements ExerciciosBD {
  public numero: number = 22;
  public descricao: string = `Ler um valor e escrever se é par ou ímpar.`;
  public categoria: number = 2;
  public executar() {
    console.clear();
    console.log('Exercicio 22');
    const valor = Number(prompt('Digite um valor: ')?.replace(',', '.').trim());

    if (valor % 2 == 0) {
      console.log(`${valor.toLocaleString('br')} é par`);
    } else if (valor % 2 == 1) {
      console.log(`${valor.toLocaleString('br')} é ímpar`);
    }
  }
}
