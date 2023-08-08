"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_model_1 = __importDefault(require("../models/user.model"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
class AuthController {
    static async Login(req, res) {
        try {
            let user = await user_model_1.default.findOne({ email: req.body.email });
            if (!user) {
                return res.status(400).json({ message: 'User not found' });
            }
            bcrypt_1.default.compare(req.body.password, user.password, (err, result) => {
                if (err)
                    throw err;
                if (result) {
                    let payload = {
                        _id: user._id,
                        email: user.email,
                        role: user.role
                    };
                    let token = jsonwebtoken_1.default.sign(payload, '123456789', { expiresIn: 60 * 60 * 24 * 1000 });
                    res.cookie('accessToken', token, {
                        httpOnly: true,
                        maxAge: 60 * 60 * 1000
                    });
                    return res.json({ token: token, code: 200 });
                }
                else {
                    res.json('authentication failed');
                }
            });
        }
        catch (err) {
            res.status(400).json({ err: err });
        }
    }
    static async Register(req, res) {
        try {
            let { name, email, password } = req.body;
            const emailUser = await user_model_1.default.findOne({ email: email });
            if (!emailUser) {
                let user = {
                    name: name,
                    email: email,
                    password: await bcrypt_1.default.hash(password, 10)
                };
                await user_model_1.default.create(user);
                return res.status(200).json({ message: 'Register successfully' });
            }
            else {
                return res.json({ message: 'Email is existed' });
            }
        }
        catch (e) {
            res.status(400).json({ err: e });
        }
    }
}
exports.default = AuthController;
//# sourceMappingURL=auth.controller.js.map