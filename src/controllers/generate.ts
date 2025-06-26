import { Request, Response } from "express";
import dotenv from 'dotenv'
import { preguntaPrincipal } from "../Interrogantes";
import { suggest } from "../Interrogantes/suiggest";
import getChatCompletion from "../config/huggingface.config";
import getChatCompletionq from "../config/openRouterconfig";

dotenv.config()



class GenerateData {


    static sendData = async (req: Request, res: Response) => {

        const principal = preguntaPrincipal(req.body)


        try {
            const pPrincipal = await getChatCompletion(principal)
            res.status(200).json(pPrincipal)
        } catch (error) {

            res.status(401).json({ error: "Token agotados" })
        }

    }

    static suggestUser = async (req: Request, res: Response) => {

        const principal = suggest(req.body)


        try {
            const pPrincipal = await getChatCompletion(principal)
            res.status(200).json(JSON.parse(pPrincipal))
        } catch (error) {

            res.status(401).json({ error: "Token agotados" })
        }

    }
}



export default GenerateData
