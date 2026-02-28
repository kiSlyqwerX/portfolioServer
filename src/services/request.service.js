const { application } = require("express")

const BOT_TOKEN = process.env.BOT_TOKEN
const CHAT_ID = process.env.CHAT_ID

async function requestSendToTelegram(formData) {
    try {
        const{ name, surname, projectType, comment, contact} = formData

        const message = `Нова заявка з сайту:
            Імя: ${name}
            Прізвище: ${surname}
            Контакт: ${contact}
            Тип проекту: ${projectType}
            Коментар: ${comment || "Коментар відсутній"}
        `

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

        return {
            success: true,
            message: "Дані в телеграм відправлено"
        }
    } catch (error) {
        return {
            success: false,
            message: error.message
        }
    }
}

export {
    requestSendToTelegram
}