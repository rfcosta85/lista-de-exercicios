import { ExerciciosBD } from './../models/exercicios.model';
export class Exercicio27 implements ExerciciosBD {
  public numero: number = 27;
  public descricao: string = `Ler três valores e escrevê-los em ordem decrescente.`;
  public categoria: number = 2;
  public executar() {
    console.clear();
    console.log(`Exercicio 27`);
    const valor1 = Number(
      prompt('Digite o primeiro número: ')?.replace(',', '.').trim()
    );
    const valor2 = Number(
      prompt('Digite o segundo número: ')?.replace(',', '.').trim()
    );

    const valor3 = Number(
      prompt('Digite o terceiro número: ')?.replace(',', '.').trim()
    );

    if (valor1 > valor2 && valor1 > valor3 && valor2 > valor3) {
      console.log(
        `${valor1.toLocaleString('br')}, ${valor2.toLocaleString(
          'br'
        )}, ${valor3.toLocaleString('br')}`
      );
    } else if (valor2 > valor1 && valor2 > valor3 && valor1 > valor3) {
      console.log(
        `${valor2.toLocaleString('br')}, ${valor1.toLocaleString(
          'br'
        )}, ${valor3.toLocaleString('br')}`
      );
    } else if (valor3 > valor1 && valor3 > valor2 && valor2 > valor1) {
      console.log(
        `${valor3.toLocaleString('br')}, ${valor2.toLocaleString(
          'br'
        )}, ${valor1.toLocaleString('br')}`
      );
    } else {
      console.log(
        `${valor2.toLocaleString('br')}, ${valor3.toLocaleString(
          'br'
        )}, ${valor1.toLocaleString('br')}`
      );
    }
  }
}
