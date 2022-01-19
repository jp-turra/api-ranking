import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import JogadorDto from './dto/jogador.dto';
import Jogador from './interface/jogador.interface';
import { JogadorEntity } from './jogador.entity';

@Injectable()
export class JogadoresProvider {
  constructor(
    @InjectRepository(JogadorEntity)
    private jogadoresRepo: Repository<JogadorEntity>,
  ) {}

  async upsert(jogadorDto: JogadorDto): Promise<void> {
    const { email, nome, telefone } = jogadorDto;
    let jogador: JogadorEntity = await this.get(email);
    if (jogador) jogador.nome = nome;
    else jogador = new JogadorEntity(nome, email, telefone);

    this.jogadoresRepo.save(jogador);
    return;
  }

  async getAll(): Promise<JogadorEntity[]> {
    return this.jogadoresRepo.find();
  }

  async get(email: string): Promise<JogadorEntity> {
    return this.jogadoresRepo.findOne({ where: { email: email } });
  }

  async delete(email: string): Promise<void> {
    const jogador = await this.get(email);
    if (!jogador) throw new NotFoundException();
    await this.jogadoresRepo.delete(jogador.id);
  }
}
