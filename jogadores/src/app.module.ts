import { Module } from '@nestjs/common';
import { JogadoresModule } from './jogadores/jogadores.module';
import { configService } from './config/config.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppService } from './app.service';
import { CategoriasModule } from './categorias/categorias.module';

@Module({
  imports: [
    JogadoresModule,
    SequelizeModule.forRoot(configService.getSequelizeConfig()),
    CategoriasModule,
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
