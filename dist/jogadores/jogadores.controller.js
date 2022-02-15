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
exports.JogadoresController = void 0;
const common_1 = require("@nestjs/common");
const jogador_dto_1 = require("./dto/jogador.dto");
const jogador_model_1 = require("../models/jogador.model");
const jogadores_provider_1 = require("./jogadores.provider");
let JogadoresController = class JogadoresController {
    constructor() {
        this.provider = new jogadores_provider_1.JogadoresProvider(jogador_model_1.default);
    }
    async upsert(jogadorDto) {
        this.provider.upsert(jogadorDto);
        return;
    }
    async get(email) {
        return !email
            ? await this.provider.getAll()
            : [await this.provider.get(email)];
    }
    async delete(email) {
        this.provider.delete(email);
        return;
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [jogador_dto_1.default]),
    __metadata("design:returntype", Promise)
], JogadoresController.prototype, "upsert", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], JogadoresController.prototype, "get", null);
__decorate([
    (0, common_1.Delete)(),
    __param(0, (0, common_1.Query)('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], JogadoresController.prototype, "delete", null);
JogadoresController = __decorate([
    (0, common_1.Controller)('Jogadores')
], JogadoresController);
exports.JogadoresController = JogadoresController;
//# sourceMappingURL=jogadores.controller.js.map