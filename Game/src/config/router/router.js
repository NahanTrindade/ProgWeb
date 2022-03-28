import express from "express";
import mainController from "../../../app/controllers/main";
const router = express.Router();

router.get("/"              ,mainController.index);
router.get("/about"         ,mainController.about);
router.get("/ui"            ,mainController.ui);
router.get("/game"          ,mainController.game);
export default router;