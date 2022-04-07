"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
class Jogador {
    constructor(nome, email, telefone) {
        this._id = (0, uuid_1.v4)();
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
    }
}
exports.default = Jogador;
//# sourceMappingURL=jogador.interface.js.map