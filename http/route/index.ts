import {Router} from "express";
import APIRouter from './api'
import errorHandler from "../middleware/errorHandler";

const router = Router();


router.use('/api/v1', APIRouter);

router.use(errorHandler)
export default router;