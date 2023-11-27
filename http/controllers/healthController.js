"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHealthcheck = void 0;
const os_1 = __importDefault(require("os"));
const getHealthcheck = (req, res) => {
    const cpuUsage = os_1.default.loadavg()[0]; // unix average load  last minute
    const freeMemory = os_1.default.freemem(); // linux free memory
    res.json({ cpuUsage, freeMemory });
};
exports.getHealthcheck = getHealthcheck;
