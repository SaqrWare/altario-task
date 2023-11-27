import {Router} from "express";
import uploadMiddleware from "../../middleware/upload";
import authMiddleware from "../../middleware/authentication";
import {postUploadFile} from "../../controllers/uploadController";
import limiter from "../../middleware/serviceLimiter";
import uploadLimitMiddleware from "../../middleware/uploadLiimit";

const router = Router();

router.use(limiter)
router.use(authMiddleware);
router.use(uploadLimitMiddleware)

router.post("/", uploadMiddleware.array('files', 5), postUploadFile)

export default router;