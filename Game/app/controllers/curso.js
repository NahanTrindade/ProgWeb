import { Curso } from "../models/index";

async function index(req, res) {
    const cursos = await Curso.findAll();
    res.render('curso/index', {
        cursos: cursos.map(curso => curso.toJSON())
    });
};


const create = async (req, res) => {
    if (req.route.methods.get) {
        res.render('curso/create');
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
    const curso = await Curso.findOne({
        where: {
            id: req.params.id,
        }
    })
    console.log('ENTROU NA PORRA DO READ');
    res.render('curso/read', {
        curso: curso.toJSON()
    });
};

async function update(req, res) {
    const curso = await Curso.findOne({
        where: {
            id: req.params.id,
        }
    })
    if (req.route.methods.get) {
        res.render("curso/update", { curso: curso.toJSON() });
    } else {
        try{
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
    await Curso.destroy({where: {id: req.params.id}});
    res.redirect(`/curso/`);
};

export default { index, read, create, update, remove };
