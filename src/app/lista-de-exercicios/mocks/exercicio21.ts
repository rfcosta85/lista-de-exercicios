import { ExerciciosBD } from './../models/exercicios.model';
export class Exercicio21 implements ExerciciosBD {
  public numero: number = 21;
  public descricao: string = `Ler um valor e escrever se é positivo, negativo ou zero. (AJUSTADO)`;
  public categoria: number = 2;
  public executar() {
    console.clear();
    console.log('Exercicio 21');
    const valor = Number(
      prompt('Digite um valor qualquer')?.replace(',', '.').trim()
    );

    if (valor > 0) {
      console.log(`${valor.toLocaleString('br')} é positivo`);
    } else if (valor < 0) {
      console.log(`${valor.toLocaleString('br')} é negativo`);
    } else {
      console.log(`${valor.toLocaleString('br')} é zero`);
    }
  }
}
