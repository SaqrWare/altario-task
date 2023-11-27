"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Errors_1 = __importDefault(require("../../constants/Errors"));
let uploadCount = 0;
const maxConcurrentUploads = 5;
const uploadLimitMiddleware = (req, res, next) => {
    if (uploadCount >= maxConcurrentUploads) {
        return res.status(503).send(Errors_1.default.SERVICE_UNAVAILABLE_FILES_PROCESSING);
    }
    uploadCount++;
    res.on('finish', () => {
        uploadCount--;
    });
    next();
};
exports.default = uploadLimitMiddleware;
