"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_basic_auth_1 = __importDefault(require("express-basic-auth"));
// For the task only, not for production usage
const users = {
    omar: '123',
};
const authMiddleware = (0, express_basic_auth_1.default)({
    users,
    challenge: true,
    unauthorizedResponse: 'Unauthorized',
});
exports.default = authMiddleware;
