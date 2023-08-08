"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, 'Name cannot be blank']
    },
    email: {
        type: String,
        required: [true, 'Email cannot be blank']
    },
    password: {
        type: String,
        required: [true, 'Password cannot be blank'],
        minLength: [6, 'Password must contain at least 6 characters']
    },
    role: {
        type: String,
        default: 'admin',
        enum: ['user', 'admin']
    }
});
const User = (0, mongoose_1.model)('User', userSchema);
exports.default = User;
//# sourceMappingURL=user.model.js.map