interface Jogador {
  readonly _id: number;
  readonly telefone: string;
  readonly email: string;
  nome: string;
  ranking: string;
  posicaoRanking: number;
  urlFotoJogador: string;
}

export default Jogador;
