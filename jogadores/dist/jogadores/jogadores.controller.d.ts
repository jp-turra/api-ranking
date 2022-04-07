import JogadorDto from './dto/jogador.dto';
import JogadorModel from '../models/jogador.model';
export declare class JogadoresController {
    private provider;
    upsert(jogadorDto: JogadorDto): Promise<void>;
    get(email: string): Promise<JogadorModel | JogadorModel[]>;
    delete(email: string): Promise<void>;
}
