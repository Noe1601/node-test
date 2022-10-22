"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    firstName: {
        type: String,
        required: [true, 'The name is required'],
        unique: false
    },
    lastName: {
        type: String,
        required: [true, 'The lastname is required'],
        unique: false
    },
    email: {
        type: String,
        required: [true, 'The email is required']
    },
    password: {
        type: String,
        required: [true, 'The password is required'],
        unique: false
    },
    createdDate: {
        type: Date,
        unique: false
    },
    role: {
        type: String,
        unique: false
    }
});
exports.default = (0, mongoose_1.model)('Users', UserSchema);
//# sourceMappingURL=user.entity.js.map