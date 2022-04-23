import express from "express";
import router from "./src/config/router/router";
import { engine } from "express-handlebars";
import sass from "node-sass-middleware";
import cookieParser from "cookie-parser";
import csurf from "csurf";

const morgan = require("morgan");

const app = express();
const PORT = 4444;
app.use(morgan("short"));

app.engine("handlebars", engine({
    layoutsDir: __dirname + '/app/views/layouts',
    defaultLayout: "main",
    helpers: require(`${__dirname}/app/views/helpers/helpers.js`),
}));


app.set("view engine", "handlebars");
app.set("views", __dirname + '/app/views');

app.use(sass({
    src: __dirname + '/src/public/scss',
    dest: __dirname + '/src/public/css',
    outputStyle: "compressed",
    prefix: "/css",
}))

app.use("/css", express.static(__dirname + '/src/public/css'));
app.use("/img", express.static(__dirname + '/src/public/img'));
app.use("/webfonts", express.static(__dirname + '/node_modules/@fortawesome/fontawesome-free/webfonts'));
app.use("/js", [
    express.static(__dirname + '/node_modules/bootstrap/dist/js/'),
    express.static(__dirname + '/src/public/js')
]);



app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());
app.use(csurf({ cookie: true }));

app.get('/cookie', (req, res) => {
    if (!('usuario' in req.cookies)) {
        res.cookie('usuario', '1234');
        res.send('Usuario não identificado. Criando cookie agora!');
    } else {
        res.send(`Usuario Identificado. ID ${req.cookies['usuario']}`);
    }
})

app.use(router);

app.listen(PORT, () => {
    console.log("Executando na porta 4444!");
});