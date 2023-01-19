import { ExerciciosBD } from '../models/exercicios.model';

export class Exercicio9 implements ExerciciosBD {
  public numero: number = 9;
  public descricao: string =
    'Ler uma temperatura em graus Fahrenheit, calcular e escrever o valor equivalente em graus Celsius. A conversão é dada por: ';
  public categoria: number = 1;
  public executar() {
    console.clear();
    console.log('Exercicio 09');
    const fahrenheit = Number(
      prompt('Digite a temperatura em Fahrenheit: ')?.replace(',', '.').trim()
    );
    const celsius = ((fahrenheit - 32) / 9) * 5;
    console.log(
      `${fahrenheit}°F convertido em celsius será: ${celsius.toLocaleString(
        'br',
        {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }
      )}°C`
    );
  }
}
