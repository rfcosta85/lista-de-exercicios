import { ExerciciosBD } from '../models/exercicios.model';

export class Exercicio40 implements ExerciciosBD {
  public numero: number = 40;
  public descricao: string = `A Secretaria de Meio Ambiente, responsável pelo controle do índice de
poluição, mantém 3 grupos de indústrias que são altamente poluentes.
O índice de poluição aceitável varia de 0,05 até 0,25. Se o índice sobe para 0,3, as indústrias do 1º grupo devem suspender suas
atividades. Se o índice aumentar para 0,4, as indústrias do 1º e do 2º
grupos devem suspender suas atividades. Por fim, se o índice atingir 0,5,
todos os grupos devem parar suas atividades. Ler o índice de poluição
e emitir a notificação adequada aos diferentes grupos de empresas.`;
  public categoria: number = 2;
  public executar() {
    console.clear();
    console.log('Exercicio 40');
    const indiceDePoluicao = Number(
      prompt('Digite o índice de poluição: ')?.replace(',', '.')?.trim()
    );
    if (indiceDePoluicao <= 0.25) {
      console.log(
        `${indiceDePoluicao.toLocaleString('br')} índice de poluição aceitável`
      );
    } else if (indiceDePoluicao >= 0.3 && indiceDePoluicao < 0.4) {
      console.log(
        `${indiceDePoluicao.toLocaleString(
          'br'
        )} indústrias do 1° grupo, devem suspender as suas atividades`
      );
    } else if (indiceDePoluicao >= 0.4 && indiceDePoluicao < 0.5) {
      console.log(
        `${indiceDePoluicao.toLocaleString(
          'br'
        )} indústrias do 1° e 2° grupo devem suspender as suas atividades`
      );
    } else if (indiceDePoluicao >= 0.5) {
      console.log(
        `${indiceDePoluicao.toLocaleString(
          'br'
        )} indústrias de todos os grupos devem suspender as suas atividades`
      );
    } else {
      console.log(
        `${indiceDePoluicao.toLocaleString(
          'br'
        )} Sem ações para o índice de poluição informado`
      );
    }
  }
}
