import { ExerciciosBD } from './../models/exercicios.model';
export class Exercicio36 implements ExerciciosBD {
  public numero: number = 36;
  public descricao: string = `Ler os horários de início e de fim de um jogo de xadrez, calcular e escrever
  a duração do jogo em horas e minutos. Considere que o tempo máximo de
  duração de um jogo é de 24h e que uma partida pode iniciar em um dia e
  terminar no dia seguinte. (ajustar)`;
  public categoria: number = 2;
  public executar() {
    console.clear();
    console.log(`Exercicio 36`);
    const horaInicio = Number(
      prompt('Digite a hora de início do jogo: ')?.replace(',', '.').trim()
    );
    const horaFinal = Number(
      prompt('Digite a hora de final do jogo: ')?.replace(',', '.').trim()
    );
    const minutoInicio = Number(
      prompt('Digite o minuto de início do jogo: ')?.replace(',', '.').trim()
    );
    const minutoFinal = Number(
      prompt('Digite o minuto de final do jogo: ')?.replace(',', '.').trim()
    );
    const hora = horaFinal - horaInicio;
    const minuto = minutoFinal - minutoInicio;
    if (horaInicio > horaFinal && minutoInicio > minutoFinal) {
      console.log(
        `O jogo durou ${24 - horaInicio + horaFinal} horas e ${
          minuto * -1
        } minutos`
      );
    } else if (horaInicio > horaFinal) {
      console.log(
        `O jogo durou ${24 - horaInicio + horaFinal} horas e ${minuto} minutos`
      );
    } else if (horaInicio < horaFinal && minutoInicio > minutoFinal) {
      console.log(`O jogo durou ${hora} horas e ${minuto * -1} minutos`);
    } else if (horaInicio < horaFinal) {
      console.log(`O jogo durou ${hora} horas e ${minuto} minutos`);
    } else if (horaInicio === horaFinal) {
      if (minutoInicio > minutoFinal) {
        console.log(
          `O jogo durou ${24 - horaInicio + horaFinal} horas e ${
            60 - minutoInicio + minutoFinal
          } minutos`
        );
      } else if (minutoInicio < minutoFinal) {
        console.log(`O jogo durou ${hora} horas e ${minuto} minutos`);
      } else if (minutoInicio === minutoFinal) {
        console.log(`O jogo durou ${hora} horas e ${minuto} minutos`);
      }
    }
  }
}
