"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_controller_1 = require("../../modules/users/users.controller");
const express_validator_1 = require("express-validator");
const router = (0, express_1.Router)();
router.get('/', users_controller_1.getUsers);
router.post('/', users_controller_1.createUser);
router.put('/:id', [
    (0, express_validator_1.check)('id', 'No es un id valido').isMongoId()
], users_controller_1.updateUser);
exports.default = router;
//# sourceMappingURL=user.routes.js.map