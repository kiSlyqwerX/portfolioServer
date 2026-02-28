import { Router } from "express";
const requestRouter = Router()
import { validateReqBody } from "..validators/request.validator.js";
import { requestSend } from "../controllers/request.controller.js";

requestRouter.post("/send", validateReqBody, requestSend)



export default requestRouter