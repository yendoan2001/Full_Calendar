"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const auth = async (req, res, next) => {
    try {
        let accessToken = req.body['accessToken'];
        if (accessToken) {
            jsonwebtoken_1.default.verify(accessToken, '123456789', (err, decoded) => {
                if (err) {
                    return res.json({ error: err.error });
                }
                else {
                    req.decoded = decoded;
                    next();
                }
            });
        }
        else {
            return res.status(401).json({
                message: 'No token provided.'
            });
        }
    }
    catch (e) {
        return res.status(401).json({ error: e.error });
    }
};
exports.auth = auth;
//# sourceMappingURL=auth.js.map