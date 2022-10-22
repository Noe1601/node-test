"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.emailExists = void 0;
const user_entity_1 = __importDefault(require("../../modules/users/entity/user.entity"));
const emailExists = (email, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const existsEmail = yield user_entity_1.default.findOne({ email });
        if (existsEmail) {
            return res.status(400).json({
                success: false,
                data: null,
                message: 'Este usuario ya está registrado.'
            });
        }
    }
    catch (error) {
    }
});
exports.emailExists = emailExists;
exports.default = exports.emailExists;
//# sourceMappingURL=validate-email.helper.js.map