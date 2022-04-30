import express from "express";
import mainController from "../../../app/controllers/main";
import areaController from "../../../app/controllers/area";
import cursoController from "../../../app/controllers/curso";
import jogoController from "../../../app/controllers/jogo";
import authCheck from '../../utils/authCheck';
const router = express.Router();

//MainController
router.get("/", mainController.index);
router.get("/about", mainController.about);
router.get("/ui", mainController.ui);
router.get("/cadastro", mainController.cadastro);
router.post("/cadastro", mainController.cadastro);
router.get("/login", mainController.login);
router.post("/login", mainController.login);
router.get("/logout", mainController.logout);

//AreaController
router.get("/areas", authCheck, areaController.index);

//CursoController
router.get('/curso', authCheck, cursoController.index);
router.get('/curso/create', authCheck, cursoController.create);
router.post('/curso/create', authCheck, cursoController.create);
router.get('/curso/:id', authCheck, cursoController.read);
router.get('/curso/update/:id', authCheck, cursoController.update);
router.post('/curso/update/:id', authCheck, cursoController.update);
router.delete('/curso/remove/:id', authCheck, cursoController.remove);

//JogoController
router.get("/jogo", authCheck,jogoController.index);
router.get("/ranking" , jogoController.ranking);
router.post("/save" , authCheck,jogoController.save);

export default router;