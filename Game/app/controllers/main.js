const index = (req, res) => {
    res.render("main/index", { titulo: "Index" });
}

const about = (req, res) => {
    res.render("main/about", { titulo: "About" });
}

export default { index, about }