import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JogadorEntity } from './jogador.entity';
import { JogadoresController } from './jogadores.controller';
import { JogadoresProvider } from './jogadores.provider';

@Module({
  imports: [TypeOrmModule.forFeature([JogadorEntity])],
  providers: [JogadoresProvider],
  controllers: [JogadoresController],
})
export class JogadoresModule {}
