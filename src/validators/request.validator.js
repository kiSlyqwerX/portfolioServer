async function validateReqBody(req, res, next) {
    if (!req.body) return res.status(400).send("Body is invalid")

    const {name, surname, projectType, contact } = req.body

    if (!name || typeof name !== "string" || name.length < 2) {
        return res.status(400).send("Name is invalid")
    }

    if (!surname || typeof surname !== "string" || surname.length < 2) {
        return res.status(400).send("Surname is invalid")
    }

    if (!projectType) {
        return res.status(400).send("Project type is invalid")
    }

    if (!contact || contact.length < 2) {
        return res.status(400).send("Wrong contact")
    }

    next()
    
}

export { validateReqBody}