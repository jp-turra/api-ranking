import { Module } from '@nestjs/common';
import { JogadoresModule } from './jogadores/jogadores.module';
import { configService } from './config/config.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    JogadoresModule,
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
