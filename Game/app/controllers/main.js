const index = (req, res) => {
    res.render("main/index", { layout: "main" });
}

const about = (req, res) => {
    res.render("main/about", { layout: "main" });
}

const ui = (req, res) => {
    res.render("main/ui", {layout: "main"});
}

export default { index, about, ui }