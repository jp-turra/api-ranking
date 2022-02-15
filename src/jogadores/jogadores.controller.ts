import { Body, Controller, Delete, Get, Post, Query } from '@nestjs/common';
import JogadorDto from './dto/jogador.dto';
import JogadorModel from '../models/jogador.model';
import { JogadoresProvider } from './jogadores.provider';
@Controller('Jogadores')
export class JogadoresController {
  private provider = new JogadoresProvider(JogadorModel);
  @Post()
  async create(@Body() jogadorDto: JogadorDto): Promise<JogadorModel> {
    return await this.provider.create(jogadorDto);
  }

  @Get()
  async get(
    @Query('email') email: string,
  ): Promise<JogadorModel | JogadorModel[]> {
    return !email
      ? await this.provider.getAll()
      : [await this.provider.get(email)];
  }

  @Delete()
  async delete(@Query('email') email: string): Promise<void> {
    this.provider.delete(email);
    return;
  }
}
