import express from "express";
import mainController from "../../../app/controllers/main";
import areaController from "../../../app/controllers/area";
import cursoController from "../../../app/controllers/curso";
const router = express.Router();

//MainController
router.get("/"                  , mainController.index);
router.get("/about"             , mainController.about);
router.get("/ui"                , mainController.ui);
router.get("/game"              , mainController.game);

//AreaController
router.get("/areas"              , areaController.index);

//CursoController
router.get('/curso'                      , cursoController.index);
router.get('/curso/create'               , cursoController.create);
router.post('/curso/create'              , cursoController.create);
router.get('/curso/:id'                  , cursoController.read);
router.get('/curso/update/:id'           , cursoController.update);
router.post('/curso/update/:id'          , cursoController.update);
router.delete('/curso/remove/:id'          , cursoController.remove);


export default router;