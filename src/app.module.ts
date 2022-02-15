import { Module } from '@nestjs/common';
import { JogadoresModule } from './jogadores/jogadores.module';
import { configService } from './config/config.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppService } from './app.service';

@Module({
  imports: [
    JogadoresModule,
    SequelizeModule.forRoot(configService.getSequelizeConfig()),
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
