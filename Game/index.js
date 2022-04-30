import express from "express";
import router from "./src/config/router/router";
import { engine } from "express-handlebars";
import sass from "node-sass-middleware";
import cookieParser from "cookie-parser";
import csurf from "csurf";
import session from "express-session";
import { v4 as uuidv4 } from "uuid";
import dotenv from 'dotenv';

const morgan = require("morgan");

const app = express();
dotenv.config();

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

app.use(session({
    genid: (req) => {
        return uuidv4();
    },
    secret: 'Hi9Cf#mK98' ,
    resave: false,
    saveUninitialized: true
}))

app.use((req, res, next) => {
    app.locals.isLogged = 'uid' in req.session;
    next();
})

app.use(router);

app.listen(process.env.PORT, () => {
    console.log(`Executando na porta ${process.env.PORT}!`);
});