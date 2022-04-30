import { Curso, Area, Partida, sequelize } from "../models/index";
import { QueryTypes } from "sequelize";

const index = (req, res) => {
    res.render('jogo/game', {
        csrf: req.csrfToken(),
        userId: req.session.uid
    })
}

const ranking = async (req, res) => {
    const ranking = await sequelize.query(`\
    SELECT
	    nome as nome,
        pontuacao as pontuacao
    
    From
	    users, partidas
    WHERE
	    users.id = partidas.userId 
    ORDER BY pontuacao DESC
        ;`, { type: QueryTypes.SELECT });
    res.render("jogo/ranking", { partidas: ranking });
}

const save = async (req, res) => {
    if (req.route.methods.post) {
        try {
            await Partida.create(req.body);
            res.redirect('/');
        } catch (errors) {
            res.render('curso/', {
                csrf: req.csrfToken(),
            })
        }
    }
}


export default { index, ranking, save }