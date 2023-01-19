import { ExerciciosBD } from './../models/exercicios.model';
export class Exercicio8 implements ExerciciosBD {
  public numero: number = 8;
  public descricao: string =
    'Ler uma quantidade de chuva dada em polegadas, calcular e escrever o valor equivalente em milímetros. Sabe-se que 1 corresponde a 25,4mm';
  public categoria: number = 1;
  public executar() {
    console.clear();
    console.log('Exercicio 08');
    const chuvaEmPolegadas = Number(
      prompt('Digite a quantidade de chuva em polegadas')?.replace(',', '.')
    );
    const polegadasEmMilimetros = 25.4;
    const resultado = chuvaEmPolegadas * polegadasEmMilimetros;
    console.log(`Chuva em Polegadas: ${chuvaEmPolegadas} polegadas
    Chuva em milimetros: ${resultado} mm`);
  }
}
