import { requestSendToTelegram } from "../services/request.service.js"

async function requestSend(req, res) {
    try {
        const formData = req.body

        const result = await requestSendToTelegram(formData)

        if (!result.success) {
            return res.status(500).json({ success: false, message: result.message})
        }

        return res.status(200).json({success: true, message: result.message})
    } catch (error) {
        return res.status(500).json({ success: false, message: "Помилка сервера"})
    }
}

export { requestSend}