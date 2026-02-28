import express from "express"
import "dotenv/config"
import { checkSite } from ".src/middlewares/request.middleware.js"
import requestRouter from "./src/routes/request.route.js"

const app = express()
app.use(checkSite)
app.use(express.json())
app.use("/request", requestRouter)

app.listen(5000, () => {
    console.log(`Server is on port 5000`)
})