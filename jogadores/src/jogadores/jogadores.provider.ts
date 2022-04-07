import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
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

  async update(_id: number, jogadorDto: JogadorDto): Promise<JogadorModel> {
    const jogador = await this.jogadorModel.findOne({ where: { id: _id } });
    if (!jogador)
      throw new NotFoundException(`O jogador com id ${_id} não foi encontrado`);
    return await jogador.update(jogadorDto);
  }

  async getAll(): Promise<JogadorModel[]> {
    return this.jogadorModel.findAll();
  }

  async get(id: number): Promise<JogadorModel> {
    const jogador = await this.jogadorModel.findOne({
      where: { id: id },
    });
    if (!jogador)
      throw new BadRequestException(
        `Não foi póssível encontrar o jogador com id ${id}`,
      );
    return jogador;
  }

  async delete(id: number): Promise<void> {
    const jogador = await this.get(id);
    if (!jogador) throw new NotFoundException();
    await jogador.destroy();
  }
}
