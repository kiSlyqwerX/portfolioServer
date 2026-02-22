
import express from "express"

const app = express()
app.use(express.json())

const BOT_TOKEN = process.env.BOT_TOKEN
const CHAT_ID = process.env.CHAT_ID

async function sendData(req, res) {
    const { name, surname, projectType, comment, contact } = req.body

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

    const message = `Нова заявка з сайту:
    Імя: ${name}
    Прізвище: ${surname}
    Контакт: ${contact}
    Тип проекту: ${projectType}
    Коментар: ${comment || "Коментар відсутній"}
    `

    console.log(message)

    fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            chat_id: CHAT_ID,
            text: message,
        }),
    })

    res.send("Thank you for data!")
}

async function getServerStatus(req, res) {
    res.send("Hi i work on port 5000")
}

app.get("/", getServerStatus)
app.post("/form", sendData)

app.listen(5000, () => {
    console.log(`Server is on port 5000`)
})