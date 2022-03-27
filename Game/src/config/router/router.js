import express from "express";
import mainController from "../../../app/controllers/main";
const router = express.Router();

router.get("/"              ,mainController.index);
router.get("/about"         ,mainController.about);

export default router;