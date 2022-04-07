import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import JogadorDto from './dto/jogador.dto';
import JogadorModel from '../models/jogador.model';
import { JogadoresProvider } from './jogadores.provider';
import { JogadoresValidacaoPipe } from './pipes/jogadores.validacao.pipe';
@Controller('Jogadores')
export class JogadoresController {
  private provider = new JogadoresProvider(JogadorModel);

  @Post()
  @UsePipes(ValidationPipe)
  async create(@Body() jogadorDto: JogadorDto): Promise<JogadorModel> {
    return await this.provider.create(jogadorDto);
  }
  @Put('/:_id')
  @UsePipes(ValidationPipe)
  async atualizar(
    @Body() jogadorDto: JogadorDto,
    @Param('_id', JogadoresValidacaoPipe) _id: number,
  ): Promise<JogadorModel> {
    return await this.provider.update(_id, jogadorDto);
  }

  @Get()
  async getAll(): Promise<JogadorModel[]> {
    return this.provider.getAll();
  }

  @Get(':_id')
  async get(
    @Param('_id', JogadoresValidacaoPipe) _id: number,
  ): Promise<JogadorModel> {
    return await this.provider.get(_id);
  }

  @Delete()
  async delete(
    @Query('_id', JogadoresValidacaoPipe) _id: number,
  ): Promise<void> {
    this.provider.delete(_id);
    return;
  }
}
