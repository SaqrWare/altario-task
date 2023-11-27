"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postUploadFile = void 0;
const SuccessMessages_1 = __importDefault(require("../../constants/SuccessMessages"));
function postUploadFile(req, res) {
    console.log(req.file);
    console.log(req.files);
    console.info("File uploaded successfully");
    res.send(SuccessMessages_1.default.FILE_UPLOADED);
}
exports.postUploadFile = postUploadFile;
