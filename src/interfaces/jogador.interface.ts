import { v4 } from 'uuid';

class Jogador {
  readonly _id: string;
  readonly telefone: string;
  readonly email: string;
  nome: string;
  ranking: string;
  posicaoRanking: number;
  urlFotoJogador: string;

  constructor(nome: string, email: string, telefone: string) {
    this._id = v4();
    this.nome = nome;
    this.email = email;
    this.telefone = telefone;
  }
}

export default Jogador;
