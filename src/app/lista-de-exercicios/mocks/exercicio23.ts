import { ExerciciosBD } from './../models/exercicios.model';
export class Exercicio23 implements ExerciciosBD {
  public numero: number = 23;
  public descricao: string = `Ler dois valores e escrever o maior deles.`;
  public categoria: number = 2;
  public executar() {
    console.clear();
    console.log('Exercicio 23');
    const valor1 = Number(
      prompt('Digite o primeiro número: ')?.replace(',', '.').trim()
    );
    const valor2 = Number(
      prompt('Digite o segundo número: ')?.replace(',', '.').trim()
    );

    if (valor1 > valor2) {
      console.log(`${valor1.toLocaleString('br')} foi o maior valor digitado`);
    } else {
      console.log(`${valor2.toLocaleString('br')} foi o maior valor digitado`);
    }
  }
}
