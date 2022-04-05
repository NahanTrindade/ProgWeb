import express from "express";
import mainController from "../../../app/controllers/main";
import areaController from "../../../app/controllers/area";
const router = express.Router();

//MainController
router.get("/"                  , mainController.index);
router.get("/about"             , mainController.about);
router.get("/ui"                , mainController.ui);
router.get("/game"              , mainController.game);

//AreaController
router.get("/areas"              , areaController.index);


export default router;