import multer from 'multer';
import path from 'path'
import Errors from "../../constants/Errors";
import {Request} from 'express';
import {isCsvFile} from "../../utils/file";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.resolve('uploads/'));
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});

const csvFileFilter = (req: Request, file: Express.Multer.File, cb: Function) => {
    if (isCsvFile(file.originalname)) {
        return cb(null, true);
    }
    cb(new Error(Errors.ONLY_CSV));
};


// Limit size
const upload = multer({
    storage,
    fileFilter: csvFileFilter,
    limits: {
        fileSize: 50 * 1024 * 1024, // 50MB limit
    },
});

export default upload;