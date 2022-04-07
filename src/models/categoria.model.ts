import { Column, Table, DataType, Model } from 'sequelize-typescript';
import { Evento } from 'src/categorias/interfaces/categoria.interface';
import Jogador from 'src/jogadores/interface/jogador.interface';

@Table({
  tableName: 'categorias',
  modelName: 'categoria',
  timestamps: true,
})
export default class CategoriaModel extends Model {
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
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  categoria: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  descricao: string;

  @Column({
    type: DataType.ARRAY,
    allowNull: true,
    defaultValue: [],
  })
  eventos: Evento[];

  @Column({
    type: DataType.ARRAY,
    allowNull: true,
    defaultValue: [],
  })
  jogadores: Jogador[];
}
