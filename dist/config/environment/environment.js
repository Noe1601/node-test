"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
;
class ConfigEnvironment {
    envConfig() {
        const databaseConfig = {
            dbUrl: process.env.DB_URL
        };
        return {
            databaseConfig,
        };
    }
}
exports.default = ConfigEnvironment;
//# sourceMappingURL=environment.js.map