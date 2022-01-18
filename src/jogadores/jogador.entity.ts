import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../base-model/base.entity';

@Entity('jogador')
export class JogadorEntity extends BaseEntity {
  constructor(nome: string, email: string, telefone: string) {
    super();
    this.nome = nome;
    this.email = email;
    this.telefone = telefone;
  }
  @Column('text')
  nome: string;
  @Column('text')
  ranking: string;
  @Column('integer')
  posicaoRanking: number;
  @Column({ type: 'text', nullable: false, unique: true })
  email: string;
  @Column({ type: 'text', nullable: false, unique: true })
  telefone: string;
}
