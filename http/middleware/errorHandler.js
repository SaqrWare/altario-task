"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandler = (err, req, res, next) => {
    // Log the error for debugging purposes
    console.error(err);
    return res.send(err.message);
};
exports.default = errorHandler;
