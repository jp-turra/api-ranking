"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JogadoresProvider = void 0;
const common_1 = require("@nestjs/common");
const jogador_model_1 = require("../models/jogador.model");
const sequelize_1 = require("@nestjs/sequelize");
let JogadoresProvider = class JogadoresProvider {
    constructor(jogadorModel) {
        this.jogadorModel = jogadorModel;
    }
    async upsert(jogadorDto) {
        const { email, nome, telefone } = jogadorDto;
        let jogador = await this.get(email);
        if (jogador)
            jogador.nome = nome;
        else
            jogador = new jogador_model_1.default({
                nome: nome,
                email: email,
                telefone: telefone,
            });
        this.jogadorModel.upsert(jogador);
        return;
    }
    async getAll() {
        return this.jogadorModel.findAll();
    }
    async get(email) {
        return this.jogadorModel.findOne({ where: { email: email } });
    }
    async delete(email) {
        const jogador = await this.get(email);
        if (!jogador)
            throw new common_1.NotFoundException();
        await jogador.destroy();
    }
};
JogadoresProvider = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(jogador_model_1.default)),
    __metadata("design:paramtypes", [Object])
], JogadoresProvider);
exports.JogadoresProvider = JogadoresProvider;
//# sourceMappingURL=jogadores.provider.js.map