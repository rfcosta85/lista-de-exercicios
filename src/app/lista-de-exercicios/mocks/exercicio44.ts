import { ExerciciosBD } from '../models/exercicios.model';

export class Exercicio44 implements ExerciciosBD {
  public numero: number = 44;
  public descricao: string = `Ler o código de origem de um produto e escrever a região de sua
    procedência conforme a tabela a seguir: 1- Norte, 2- Sul, 3- Oeste, 4- Leste, 5 ou 6- Nordeste, 7,8 ou 9- Sudeste, 10- Noroeste, 11- Sudoeste
    OBS.: caso o código não seja nenhum dos especificados, a procedência deve ser considerado importado.`;
  public categoria: number = 2;
  public executar() {
    console.clear();
    console.log('Exercicio 44');

    const codigo = Number(prompt('Digite o código do produto: ')?.trim());

    switch (codigo) {
      case 1:
        console.log(`Código: ${codigo} - Região: Norte`);
        break;
      case 2:
        console.log(`Código: ${codigo} - Região: Sul`);
        break;
      case 3:
        console.log(`Código: ${codigo} - Região: Oeste`);
        break;
      case 4:
        console.log(`Código: ${codigo} - Região: Leste`);
        break;
      case 5:
      case 6:
        console.log(`Código: ${codigo} - Região: Nordeste`);
        break;
      case 7:
      case 8:
      case 9:
        console.log(`Código: ${codigo} - Região: Sudeste`);
        break;
      case 10:
        console.log(`Código: ${codigo} - Região: Noroeste`);
        break;
      case 11:
        console.log(`Código: ${codigo} - Região: Sudoeste`);
        break;
      default:
        console.log(`Código: ${codigo} - Produto importado`);
    }
  }
}
