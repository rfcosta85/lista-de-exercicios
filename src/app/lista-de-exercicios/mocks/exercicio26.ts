import { ExerciciosBD } from './../models/exercicios.model';
export class Exercicio26 implements ExerciciosBD {
  public numero: number = 26;
  public descricao: string = `Ler dois valores e escrevê-los em ordem crescente.`;
  public categoria: number = 2;
  public executar() {
    console.clear();
    console.log('Exercicio 26');
    const valor1 = Number(
      prompt('Digite o primeiro número: ')?.replace(',', '.').trim()
    );
    const valor2 = Number(
      prompt('Digite o segundo número: ')?.replace(',', '.').trim()
    );

    if (valor1 > valor2) {
      console.log(
        `${valor1.toLocaleString('br')}, ${valor2.toLocaleString('br')}`
      );
    } else {
      console.log(
        `${valor2.toLocaleString('br')}, ${valor1.toLocaleString('br')}`
      );
    }
  }
}
