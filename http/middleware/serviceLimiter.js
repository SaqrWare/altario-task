"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_rate_limit_1 = require("express-rate-limit");
const Errors_1 = __importDefault(require("../../constants/Errors"));
const limiter = (0, express_rate_limit_1.rateLimit)({
    windowMs: 10 * 1000,
    limit: 1,
    standardHeaders: true,
    legacyHeaders: false,
    message: (req, res) => Errors_1.default.SERVICE_UNAVAILABLE
});
exports.default = limiter;
