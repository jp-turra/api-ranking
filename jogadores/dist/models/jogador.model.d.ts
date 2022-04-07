import { Model } from 'sequelize-typescript';
export default class JogadorModel extends Model {
    id: string;
    createdAt: number;
    updatedAt: number;
    deletedAt: number;
    nome: string;
    ranking: string;
    posicaoRanking: number;
    email: string;
    telefone: string;
}
