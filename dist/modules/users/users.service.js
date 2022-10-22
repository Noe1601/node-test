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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const user_entity_1 = __importDefault(require("../users/entity/user.entity"));
const mongoose_1 = __importDefault(require("mongoose"));
class UserService {
    createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { body } = req;
                const user = new user_entity_1.default(body);
                user.createdDate = new Date();
                const existsEmail = yield user_entity_1.default.findOne({ email: body.email });
                if (existsEmail) {
                    return res.status(400).json({
                        success: false,
                        data: null,
                        message: 'Este usuario ya está registrado.'
                    });
                }
                const salt = bcrypt_1.default.genSaltSync();
                user.password = bcrypt_1.default.hashSync(body.password, salt);
                yield user.save();
                res.status(200).json({
                    success: true,
                    data: user,
                    message: 'Usuario creado correctamente.'
                });
            }
            catch (error) {
                console.log(error);
                res.status(500).json({
                    success: false,
                    data: null,
                    message: error
                });
            }
        });
    }
    getAllUsers(res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield user_entity_1.default.find();
                res.json({
                    success: true,
                    data: users,
                    message: ""
                });
            }
            catch (error) {
                res.status(500).json({
                    success: false,
                    data: null,
                    message: error
                });
            }
        });
    }
    updateUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const _a = req.body, { _id, password } = _a, rest = __rest(_a, ["_id", "password"]);
                const isValidId = mongoose_1.default.Types.ObjectId.isValid(id);
                if (!isValidId) {
                    return res.status(404).json({
                        success: false,
                        data: null,
                        message: 'El id no es valido.'
                    });
                }
                const existsUser = yield user_entity_1.default.findById(id);
                if (!existsUser) {
                    return res.status(404).json({
                        success: false,
                        data: null,
                        message: 'El usuario no existe.'
                    });
                }
                if (password) {
                    const salt = bcrypt_1.default.genSaltSync();
                    rest.password = bcrypt_1.default.hashSync(password, salt);
                }
                const existsEmail = yield user_entity_1.default.findOne({ email: rest.email });
                if (existsEmail) {
                    return res.status(400).json({
                        success: false,
                        data: null,
                        message: 'Este usuario ya está registrado.'
                    });
                }
                const userModified = yield user_entity_1.default.findByIdAndUpdate(id, rest);
                res.status(500).json({
                    success: true,
                    data: userModified,
                    message: 'Usuario modificado correctamente.'
                });
            }
            catch (error) {
                console.log(error);
                res.status(500).json({
                    success: false,
                    data: null,
                    message: error
                });
            }
        });
    }
}
exports.UserService = UserService;
module.exports = {
    UserService
};
//# sourceMappingURL=users.service.js.map