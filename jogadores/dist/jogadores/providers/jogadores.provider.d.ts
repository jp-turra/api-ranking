import JogadorDto from '../dto/jogador.dto';
import Jogador from '../interface/jogador.interface';
export declare class JogadoresProvider {
    private jogadores;
    upsert(jogadorDto: JogadorDto): Promise<void>;
    getAll(): Promise<Jogador[]>;
    get(email: string): Promise<Jogador>;
    delete(email: string): Promise<void>;
}
