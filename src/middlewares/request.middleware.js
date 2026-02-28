const domain = "portfolio-two-flame-65.vercel.app"

async function checkSite(req, res, next) {
    const origin = req.headers.origin

    if (!origin.includes(domain)) {
        return res.status(401).json({ message: "Access denied!"})
    }

    next()
}

export { checkSite }