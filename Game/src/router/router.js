import express from "express";
import maincontroller from "../controllers/main"
const router = express.Router();

router.get("/", maincontroller.index);

router.get("/about", maincontroller.about);

export default router;
