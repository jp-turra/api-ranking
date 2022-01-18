import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { Repository } from 'typeorm';
import JogadorDto from '../dto/jogador.dto';
import { JogadorEntity } from '../entity/jogador.entity';
import { JogadoresProvider } from './jogadores.provider';
@Controller('Jogadores')
export class JogadoresController {
  private jogadoresRepo = new Repository<JogadorEntity>();
  private provider = new JogadoresProvider(this.jogadoresRepo);
  @Post()
  async upsert(@Body() jogadorDto: JogadorDto) {
    this.provider.upsert(jogadorDto);
    return;
  }
  @Get()
  async get(@Query('email') email: string) {
    return !email
      ? await this.provider.getAll()
      : [await this.provider.get(email)];
  }
}
