import Errors from "../../constants/Errors";
import {NextFunction, Request, Response} from "express";

let uploadCount = 0;
const maxConcurrentUploads = 5;

const uploadLimitMiddleware = (req: Request,
                               res: Response,
                               next: NextFunction) => {
    if (uploadCount >= maxConcurrentUploads) {
        return res.status(503).send(Errors.SERVICE_UNAVAILABLE_FILES_PROCESSING);
    }
    uploadCount++;
    res.on('finish', () => {
        uploadCount--;
    });
    next();
};

export default uploadLimitMiddleware;