import { ExerciciosBD } from './../models/exercicios.model';
export class Exercicio24 implements ExerciciosBD {
  public numero: number = 24;
  public descricao: string = 'Ler três valores e escrever o menor deles.';
  public categoria: number = 2;
  public executar() {
    console.clear();
    console.log('Exercicio 24');
    const valor1 = Number(
      prompt('Digite o primeiro número: ')?.replace(',', '.').trim()
    );
    const valor2 = Number(
      prompt('Digite o segundo número: ')?.replace(',', '.').trim()
    );
    const valor3 = Number(
      prompt('Digite o terceiro número: ')?.replace(',', '.').trim()
    );

    console.log(
      `Valores digitados: ${valor1.toLocaleString(
        'br'
      )}, ${valor2.toLocaleString('br')}, ${valor3.toLocaleString('br')}`
    );

    if (valor1 < valor2 && valor1 < valor3) {
      console.log(`${valor1.toLocaleString('br')} foi o menor valor digitado`);
    } else if (valor2 > valor1 && valor2 > valor3) {
      console.log(`${valor2.toLocaleString('br')} foi o menor valor digitado`);
    } else if (valor1 > valor2 && valor3 > valor2) {
      console.log(`${valor2.toLocaleString('br')} foi o menor valor digitado`);
    } else {
      console.log(`${valor3.toLocaleString('br')} foi o menor valor digitado`);
    }
  }
}
