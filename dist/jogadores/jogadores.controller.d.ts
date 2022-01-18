import JogadorDto from './dto/jogador.dto';
export declare class JogadoresController {
    private provider;
    upsert(jogadorDto: JogadorDto): Promise<void>;
    get(email: string): Promise<import("./interface/jogador.interface").default[]>;
}
