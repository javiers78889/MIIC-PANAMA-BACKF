import { Router } from "express";
import GenerateData from "../controllers/generate";



const router = Router()


router.post('/', GenerateData.sendData)


export default router