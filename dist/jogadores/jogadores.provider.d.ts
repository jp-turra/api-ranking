import JogadorDto from './dto/jogador.dto';
import JogadorModel from '../models/jogador.model';
export declare class JogadoresProvider {
    private jogadorModel;
    constructor(jogadorModel: typeof JogadorModel);
    upsert(jogadorDto: JogadorDto): Promise<void>;
    getAll(): Promise<JogadorModel[]>;
    get(email: string): Promise<JogadorModel>;
    delete(email: string): Promise<void>;
}
