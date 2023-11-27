"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const upload_1 = __importDefault(require("../../middleware/upload"));
const authentication_1 = __importDefault(require("../../middleware/authentication"));
const uploadController_1 = require("../../controllers/uploadController");
const serviceLimiter_1 = __importDefault(require("../../middleware/serviceLimiter"));
const uploadLiimit_1 = __importDefault(require("../../middleware/uploadLiimit"));
const router = (0, express_1.Router)();
router.use(serviceLimiter_1.default);
router.use(authentication_1.default);
router.use(uploadLiimit_1.default);
router.post("/", upload_1.default.array('files', 5), uploadController_1.postUploadFile);
exports.default = router;
