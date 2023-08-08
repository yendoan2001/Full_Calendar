"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const moment_1 = __importDefault(require("moment"));
const event_model_1 = __importDefault(require("../models/event.model"));
class EventController {
    static async createEvent(req, res) {
        try {
            const event = new event_model_1.default(req.body);
            await event.save();
            res.status(400).json({ message: 'Create successfully' });
        }
        catch (e) {
            res.json(e.message);
        }
    }
    static async showEvent(req, res) {
        try {
            const events = await event_model_1.default.find({
                startDate: { $gte: (0, moment_1.default)(req.query.startDate).toDate() },
                endDate: { $lte: (0, moment_1.default)(req.query.endDate).toDate() }
            });
            res.send(events);
        }
        catch (e) {
            console.log(e);
        }
    }
}
exports.default = EventController;
//# sourceMappingURL=event.controller.js.map