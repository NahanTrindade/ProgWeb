import curso from "./curso";
import { Curso, User } from "../models/index";
import bcrypt from "bcryptjs";
import dotenv from 'dotenv';


const index = (req, res) => {
    res.render("main/index", { layout: "main" });
}

const about = (req, res) => {
    res.render("main/about", { layout: "main" });
}


const ui = (req, res) => {
    res.render("main/ui", { layout: "main" });
}

const cadastro = async (req, res) => {
    if (req.route.methods.get) {
        const cursos = await Curso.findAll();
        res.status(200).render('main/cadastro', {
            cursos: cursos.map(curso => curso.toJSON()),
            csrf: req.csrfToken(),
        });
    } else {
        if (req.body.senha != req.body.conf_senha) {
            res.status(500);
        } else {
            try {
                bcrypt.genSalt(parseInt(process.env.BCRYPT_ROUNDS) , function (err, salt) {
                    bcrypt.hash(req.body.senha, salt, async (err, hash) => {
                        await User.create({
                            nome: req.body.nome,
                            email: req.body.email,
                            senha: hash,
                            cursoId: req.body.curso,
                        })
                    });
                })
                res.redirect('/')
            } catch (e) {
                console.log(e);
            }
        }
    }
}

const login = async (req, res) => {
    if (req.route.methods.get) {
        res.render('main/login', {csrf: req.csrfToken()})
    } else {
        const user = await User.findOne(
            {
                where:
                    { email: req.body.email }
            }
        );
            
        if (user) {
            bcrypt.compare(req.body.senha, user.senha, (err, ok) => {
                if (ok) {
                    req.session.uid = user.id;
                    res.redirect('/');
                } else {
                    res.render('main/login', {
                        csrf: req.csrfToken()
                    })
                }
            })
        }
    }
}

const logout = async (req, res) => {
    req.session.destroy(function (err) {
        if (err) {
            return console.log(err);
        }
        res.redirect('/');
    })
}


export default { index, about, ui, cadastro, login, logout }