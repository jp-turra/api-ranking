import { Column, Table, DataType, Model } from 'sequelize-typescript';

@Table({
  tableName: 'jogadores',
  modelName: 'jogador',
  timestamps: true,
  paranoid: true,
  deletedAt: true,
})
export default class JogadorModel extends Model {
  @Column({
    allowNull: false,
    primaryKey: true,
    type: DataType.UUID,
    unique: true,
    autoIncrement: true,
  })
  id: string;

  @Column({
    allowNull: false,
    set: (val: number) => {
      val = new Date().getTime();
    },
    type: DataType.DOUBLE,
  })
  createdAt: number;

  @Column({
    allowNull: false,
    onUpdate: 'SET DEFAULT',
    set: (val: number) => {
      val = new Date().getTime();
    },
    type: DataType.DOUBLE,
  })
  updatedAt: number;

  @Column({
    allowNull: true,
    type: DataType.DOUBLE,
  })
  deletedAt: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  nome: string;

  @Column({
    type: DataType.ENUM,
    allowNull: true,
    defaultValue: null,
    values: ['futebol', 'natacao', 'volei'],
  })
  ranking: string;

  @Column({
    type: DataType.NUMBER,
    allowNull: true,
    defaultValue: null,
  })
  posicaoRanking: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  telefone: string;
}
