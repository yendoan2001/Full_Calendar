"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_model_1 = __importDefault(require("./user.model"));
const mongoose_1 = require("mongoose");
const eventSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: [true, "Event's title required"]
    },
    startDate: {
        type: Date,
        required: [true, "Start date time required"]
    },
    endDate: {
        type: Date,
        required: [true, "Start date time required"]
    },
    location: {
        type: String
    },
    description: {
        type: String
    },
    creator: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: user_model_1.default,
        required: [true, "Event's creator is required"]
    },
    users: {
        type: [mongoose_1.Schema.Types.ObjectId],
        ref: user_model_1.default
    }
});
const Event = (0, mongoose_1.model)('Event', eventSchema);
exports.default = Event;
//# sourceMappingURL=event.model.js.map