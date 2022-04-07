"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JogadoresProvider = void 0;
const common_1 = require("@nestjs/common");
const jogador_interface_1 = require("../interface/jogador.interface");
let JogadoresProvider = class JogadoresProvider {
    constructor() {
        this.jogadores = [];
    }
    async upsert(jogadorDto) {
        const { email, nome, telefone } = jogadorDto;
        let jogador = this.jogadores.find((jogador) => {
            return jogador.email == email;
        });
        if (jogador) {
            jogador.nome = nome;
            return;
        }
        jogador = new jogador_interface_1.default(nome, email, telefone);
        this.jogadores.push(jogador);
        return;
    }
    async getAll() {
        return this.jogadores;
    }
    async get(email) {
        const jogador = this.jogadores.find((jogador) => {
            return jogador.email == email;
        });
        if (!jogador)
            throw new common_1.NotFoundException();
        return jogador;
    }
    async delete(email) {
        const index = this.jogadores.findIndex((jogador) => {
            return jogador.email == email;
        });
        if (index == -1)
            throw new common_1.NotFoundException();
        this.jogadores.splice(index, 1);
        return;
    }
};
JogadoresProvider = __decorate([
    (0, common_1.Injectable)()
], JogadoresProvider);
exports.JogadoresProvider = JogadoresProvider;
//# sourceMappingURL=jogadores.provider.js.map