"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app_1 = __importDefault(require("./app"));
require("./db/connect");
function init() {
    // PORT
    app_1.default.listen(app_1.default.get("port"), () => {
        console.log(`Server on port ${app_1.default.get("port")}`);
    });
}
init();
//# sourceMappingURL=index.js.map