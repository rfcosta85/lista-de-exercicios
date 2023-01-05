export interface ExerciciosBD {
  numero: number;
  descricao: string;
  categoria: number;
  executar: () => void;
}
