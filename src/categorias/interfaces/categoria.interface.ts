import Jogador from 'src/jogadores/interface/jogador.interface';

export interface Categoria {
  readonly categoria: string;
  eventos: Array<Evento>;
  jogadores: Array<Jogador>;
}

export interface Evento {
  nome: string;
  operacao: string;
  valor: number;
}
