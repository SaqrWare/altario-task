import {Router} from "express";
import {getHealthcheck} from "../../controllers/healthController";

const router = Router();


router.get("/", getHealthcheck)
export default router;