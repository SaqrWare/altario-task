"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const Errors_1 = __importDefault(require("../../constants/Errors"));
const storage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path_1.default.resolve('uploads/'));
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});
const csvFileFilter = (req, file, cb) => {
    const extname = path_1.default.extname(file.originalname).toLowerCase();
    if (extname === '.csv') {
        return cb(null, true);
    }
    cb(new Error(Errors_1.default.ONLY_CSV));
};
// Limit size
const upload = (0, multer_1.default)({
    storage,
    fileFilter: csvFileFilter,
    limits: {
        fileSize: 50 * 1024 * 1024, // 50MB limit
    },
});
exports.default = upload;
