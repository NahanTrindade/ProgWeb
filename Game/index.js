import express from "express";
import router from "./src/router/router"
import { engine } from "express-handlebars";

const morgan = require("morgan");

const app = express();
const PORT = 4444;
app.use(morgan("combined"));

app.use(express.static("public"));

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', `${__dirname}/src/views`);

app.use(router);


app.listen(PORT, () => {
    console.log(`Escutando na porta ${PORT}`)
})