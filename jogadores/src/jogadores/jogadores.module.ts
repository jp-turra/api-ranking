import { Module } from '@nestjs/common';
import JogadorModel from '../models/jogador.model';
import { JogadoresController } from './jogadores.controller';
import { JogadoresProvider } from './jogadores.provider';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([JogadorModel])],
  providers: [JogadoresProvider],
  controllers: [JogadoresController],
})
export class JogadoresModule {}
