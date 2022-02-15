import { Injectable, NotFoundException } from '@nestjs/common';
import JogadorDto from './dto/jogador.dto';
import JogadorModel from '../models/jogador.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class JogadoresProvider {
  constructor(
    @InjectModel(JogadorModel)
    private jogadorModel: typeof JogadorModel,
  ) {}

  async create(jogadorDto: JogadorDto): Promise<JogadorModel> {
    const { email, nome, telefone } = jogadorDto;
    return await this.jogadorModel.create({
      nome: nome,
      email: email,
      telefone: telefone,
    });
  }

  async getAll(): Promise<JogadorModel[]> {
    return this.jogadorModel.findAll();
  }

  async get(email: string): Promise<JogadorModel> {
    return this.jogadorModel.findOne({ where: { email: email } });
  }

  async delete(email: string): Promise<void> {
    const jogador = await this.get(email);
    if (!jogador) throw new NotFoundException();
    await jogador.destroy();
  }
}
