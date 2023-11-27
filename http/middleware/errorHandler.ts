import {Request, Response, NextFunction} from "express";

const errorHandler = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    // Log the error for debugging purposes
    console.error(err);
    return res.send(err.message);
};
export default errorHandler;