import { ExerciciosBD } from './../models/exercicios.model';
export class Exercicio32 implements ExerciciosBD {
  public numero: number = 32;
  public descricao: string = `Ler os nomes de dois times de futebol e o número de gols marcados por
  cada um em uma partida e escrever o nome do vencedor. Se não houver
  vencedor deve ser informado o empate.`;
  public categoria: number = 2;
  public executar() {
    console.clear();
    console.log(`Exercicio 32`);
    const time1 = prompt('Digite o nome do primeiro time: ')?.trim();
    const time2 = prompt('Digite o nome do segundo time: ')?.trim();
    const golsDoTime1 = Number(
      prompt(`Digite a quantidade de gols do time 1`)?.replace(',', '.').trim()
    );
    const golsDoTime2 = Number(
      prompt(`Digite a quantidade de gols do time 2`)?.replace(',', '.').trim()
    );

    if (golsDoTime1 > golsDoTime2) {
      console.log(`${time1} ${golsDoTime1} x ${golsDoTime2} ${time2}`);
      console.log(`${time1} venceu`);
    } else if (golsDoTime2 > golsDoTime1) {
      console.log(`${time1} ${golsDoTime1} x ${golsDoTime2} ${time2}`);
      console.log(`${time2} venceu`);
    } else {
      console.log(`${time1} ${golsDoTime1} x ${golsDoTime2} ${time2}`);
      console.log(`Empate`);
    }
  }
}
