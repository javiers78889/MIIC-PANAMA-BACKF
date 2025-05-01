import { Request, Response } from "express";
import getChatCompletion from "../config/huggingface.config";
import dotenv from 'dotenv'
import { preguntaPrincipal } from "../Interrogantes";

dotenv.config()



class GenerateData {


    static sendData = async (req: Request, res: Response) => {
        const principal = preguntaPrincipal(req.body)

        const pPrincipal= await getChatCompletion(principal)

      
        res.status(200).json(pPrincipal)
    }
}



export default GenerateData