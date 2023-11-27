import {rateLimit} from 'express-rate-limit'
import Errors from "../../constants/Errors";
import {Request, Response} from "express";

const limiter = rateLimit({
    windowMs: 10 * 1000, // 10 Seconds
    limit: 1, // Limit each IP to 1 requests per `window` (here, per 10 seconds)
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
    message: (req: Request, res: Response) => Errors.SERVICE_UNAVAILABLE
})

export default limiter