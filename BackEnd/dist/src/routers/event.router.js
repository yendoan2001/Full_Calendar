"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const event_controller_1 = __importDefault(require("../controllers/event.controller"));
const eventRouter = (0, express_1.Router)();
eventRouter.post('/', event_controller_1.default.createEvent);
eventRouter.get('/', event_controller_1.default.showEvent);
exports.default = eventRouter;
//# sourceMappingURL=event.router.js.map