import { ExerciciosBD } from './../models/exercicios.model';
export class Exercicio34 implements ExerciciosBD {
  public numero: number = 34;
  public descricao: string = `A jornada de trabalho semanal de um funcionário é de 40h. O funcionário
  que trabalha mais de 40h recebe hora extra cujo cálculo corresponde ao valor
  da hora regular com um acréscimo de 50%. Ler o número de horas trabalhadas
  em um mês, o salário por hora e escrever o salário total do funcionário que, se
  for o caso, deve ser acrescido do valor das horas extras trabalhadas.(AJUSTAR PARA O MES INTEIRO)`;
  public categoria: number = 2;
  public executar() {
    console.clear();
    console.log(`Exercicio 34`);
    const horasTrabalhadasMes = Number(
      prompt('Digite a quantidade de horas trabalhadas: ')
        ?.replace(',', '.')
        .trim()
    );
    const salarioPorHora = Number(
      prompt('Digite o salário por hora: ')?.replace(',', '.').trim()
    );

    if (horasTrabalhadasMes > 40) {
      const horasSemanais = 40;
      const acrescimo = 0.5;
      const horasExtras = horasTrabalhadasMes - 40;
      const montanteHorasExtras = salarioPorHora + salarioPorHora * acrescimo;
      const salarioTotal = horasSemanais * salarioPorHora + montanteHorasExtras;
      console.log(`Horas trabalhadas: ${horasTrabalhadasMes}`);
      console.log(`Salário por hora: ${salarioPorHora}`);
      console.log(`Horas Extras trabalhadas: ${horasExtras}`);
      console.log(
        `Horas extras em R$: ${montanteHorasExtras.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })}`
      );
      console.log(
        `Salário total: ${salarioTotal.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })}`
      );
    } else {
      const salarioTotal = horasTrabalhadasMes * salarioPorHora;
      console.log(`Horas trabalhadas: ${horasTrabalhadasMes}`);
      console.log(`Salário por hora: ${salarioPorHora}`);
      console.log(
        `Salário total: ${salarioTotal.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })}`
      );
    }
  }
}
