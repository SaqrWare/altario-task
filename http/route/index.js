"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const api_1 = __importDefault(require("./api"));
const errorHandler_1 = __importDefault(require("../middleware/errorHandler"));
const router = (0, express_1.Router)();
router.use('/api/v1', api_1.default);
router.use(errorHandler_1.default);
exports.default = router;
