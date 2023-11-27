import {Router} from "express";
import uploadRouter from "./uploadRoute";
import healthRouter from "./healthRoute";
const router = Router();

router.use("/health", healthRouter);
router.use("/upload", uploadRouter);

export default router;