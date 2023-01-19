import { ExerciciosBD } from './../models/exercicios.model';
export class Exercicio12 implements ExerciciosBD {
  public numero: number = 12;
  public descricao: string =
    'Ler o salário mensal de uma pessoa e o percentual de reajuste, calcular e escrever o valor do salário reajustado.';
  public categoria: number = 1;
  public executar() {
    console.clear();
    console.log('Exercicio 12');
    const salario = Number(
      prompt('Digite o salário atual: ')?.replace(',', '.')
    );
    const reajuste = Number(
      prompt('Digite o valor do reajuste: ')?.replace(',', '.')
    );
    const novoSalario = salario * (reajuste / 100) + salario;
    console.log(
      `Salário atual: ${salario.toLocaleString('br', {
        style: 'currency',
        currency: 'brl',
      })}\nReajuste: ${reajuste.toLocaleString(
        'br'
      )}%\nNovo Salário: ${novoSalario.toLocaleString('br', {
        style: 'currency',
        currency: 'brl',
      })}`
    );
  }
}
