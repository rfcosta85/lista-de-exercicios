import { ExerciciosBD } from './../models/exercicios.model';
export class Exercicio38 implements ExerciciosBD {
  public numero: number = 38;
  public descricao: string = `Ler a altura e o sexo de uma pessoa, calcular e escrever o seu peso ideal
segundo as seguintes expressões: 
homens: (72,7 * h) - 58
mulheres: (62,1 * h) - 44,7
Onde: h: altura`;
  public categoria: number = 2;
  public executar() {
    console.clear();
    console.log('Exercicio 38');
    const altura = Number(
      prompt('Digite a sua altura: ')?.replace(',', '.').trim()
    );
    const sexo = prompt('Digite o seu sexo: (M/F)')?.toLocaleUpperCase();

    if (sexo === 'MASCULINO' || sexo === 'M') {
      const pesoIdealMasculino = 72.7 * altura - 58;
      console.log(
        `O seu peso ideal é de: ${pesoIdealMasculino.toLocaleString('br', {
          maximumFractionDigits: 1,
          minimumFractionDigits: 1,
        })} kgs`
      );
    } else if (sexo === 'FEMININO' || sexo === 'F') {
      const pesoIdealFeminino = 62.1 * altura - 44.7;
      console.log(
        `O seu peso ideal é de: ${pesoIdealFeminino.toLocaleString('br', {
          maximumFractionDigits: 1,
          minimumFractionDigits: 1,
        })} kgs`
      );
    }
  }
}
