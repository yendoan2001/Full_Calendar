"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_model_1 = __importDefault(require("../models/user.model"));
class UserController {
    static async createUser(req, res) {
        try {
            const creator = req.decoded;
            if (creator.role !== "admin") {
                res.json({ message: 'Error' });
                return;
            }
            const user = new user_model_1.default(req.body);
            await user.save();
            res.status(400).json({ message: 'Create successfully' });
        }
        catch (e) {
            res.json(e.message);
        }
    }
}
exports.default = UserController;
//# sourceMappingURL=user.controller.js.map