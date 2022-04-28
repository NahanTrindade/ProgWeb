import { Curso, Area } from "../models/index";

async function index(req, res) {
    const cursos = await Curso.findAll();
    res.render('curso/index', {
        cursos: cursos.map(curso => curso.toJSON())
    });
};


const create = async (req, res) => {
    if (req.route.methods.get) {
        res.render('curso/create', {
            csrf: req.csrfToken(),
        });
    } else {
        try {
            await Curso.create(req.body);
            res.redirect('/curso');
        } catch (errors) {
            res.render('curso/create', {
                curso: req.body,
                errors: errors
            })
        }
    }
};

async function read(req, res) {
    const { id } = req.params;

    try {
        const curso = await Curso.findByPk(id, { include: Area });
        res.render("curso/read", { curso: curso.toJSON() })
    } catch (e) {
        console.log(e);
    }

};

async function update(req, res) {
    const curso = await Curso.findOne({
        where: {
            id: req.params.id,
        }
    })
    if (req.route.methods.get) {
        res.render("curso/update", { 
            curso: curso.toJSON(),
            csrf: req.csrfToken(),
        });
    } else {
        try {
            await Curso.update({
                sigla: req.body.sigla,
                nome: req.body.nome,
                descricao: req.body.descricao,
                areaId: req.body.areaId,
            }, { where: { id: req.params.id } });
            res.redirect(`/curso/${req.params.id}`);
        } catch (errors) {
            res.render("curso/update", {
                curso: curso.toJSON(),
                errors: errors
            })
        }
    }

};

async function remove(req, res) {

    try {
        await Curso.destroy({ where: { id: req.params.id } });
        res.status(200).send("Curso apagado com sucesso");
    } catch (e) {
        console.log(e);
        res.status(500).send(e);
    }

};

export default { index, read, create, update, remove };
