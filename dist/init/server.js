"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_middleware_1 = __importDefault(require("../common/middlewares/config.middleware"));
const user_routes_1 = __importDefault(require("../common/routes/user.routes"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '8000';
        this.middlewares();
        this.routes();
    }
    middlewares() {
        const configMiddlewares = new config_middleware_1.default();
        configMiddlewares.setBasicMiddlewares(this.app);
    }
    routes() {
        this.app.use('/api/v1/user', user_routes_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Corriendo el server en puerto ' + this.port);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map