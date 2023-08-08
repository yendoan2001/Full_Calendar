"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const event_router_1 = __importDefault(require("./src/routers/event.router"));
const database_1 = __importDefault(require("./src/configs/database"));
const auth_router_1 = __importDefault(require("./src/routers/auth.router"));
const express_fileupload_1 = __importDefault(require("express-fileupload"));
const cors_1 = __importDefault(require("cors"));
const PORT = 8000;
const app = (0, express_1.default)();
database_1.default.connect();
app.use((0, cors_1.default)());
app.use((0, express_fileupload_1.default)({
    createParentPath: true
}));
app.use(express_1.default.json());
app.use("/event", event_router_1.default);
app.use("/auth", auth_router_1.default);
app.listen(PORT, () => {
    console.log('App running on port: ' + PORT);
});
//# sourceMappingURL=index.js.map