import express from "express";
import router from "./src/config/router/router";
import { engine } from "express-handlebars";
const morgan = require("morgan");

const app = express();
const PORT = 4444;
app.use(morgan("short"));

app.engine("handlebars", engine({
    layoutsDir: `${__dirname}/app/views/layouts`,
    defaultLayout: "main",
}));
app.set("view engine", "handlebars");
app.set("views", `${__dirname}/app/views`);

app.use("/img", express.static(`${__dirname}/src/public/img`))
app.use(router);

app.listen(PORT, () => {
    console.log("Executando na porta 4444!");
});