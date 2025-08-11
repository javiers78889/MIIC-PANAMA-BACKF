import { Request, Response } from "express";
import dotenv from 'dotenv'
import { preguntaPrincipal, refinando } from "../Interrogantes";
import { suggest } from "../Interrogantes/suiggest";
import getChatCompletion from "../config/huggingface.config";
import jwt from 'jsonwebtoken'
import { Users } from "../model/user.model";

dotenv.config()



class GenerateData {
    constructor(private readonly userService: typeof Users) { }

    static readonly sendData = async (req: Request, res: Response) => {

        const principal = preguntaPrincipal(req.body)
        const decoded = jwt.decode(req.headers.authorization?.split(' ')[1]);


        try {

            if (typeof decoded === 'object') {
                await this.reduceToken(decoded?.data as number, res)
            }

            const pPrincipal = await getChatCompletion(principal)
            const newData = await getChatCompletion(refinando({ data: pPrincipal }))



            res.status(200).json(newData)
        } catch (error) {
            console.log(error);
            res.status(401).json({ error: "Token agotados" })
        }

    }

    static readonly reduceToken = async (id: number, res: Response) => {
        const user = await Users.findOne({ where: { id } });
        if (!user) throw new Error("Usuario no encontrado");

        const cantTokenNum = Number(user.cant_token);
        let tokens = Number.isNaN(cantTokenNum) ? 0 : cantTokenNum;

        if (tokens <= 0) {
            res.status(401).json({ message: "Token agotados" })
        }

        if (cantTokenNum > 0) {
            tokens = tokens - 1;
        }



        await user.update({ cant_token: tokens });
    }



    static readonly suggestUser = async (req: Request, res: Response) => {
        const decoded = jwt.decode(req.headers.authorization?.split(' ')[1]);

        const principal = suggest(req.body)


        try {

            if (typeof decoded === 'object') {
                await this.reduceToken(decoded?.data as number, res)
            }
            const pPrincipal = await getChatCompletion(principal)
            res.status(200).json(JSON.parse(pPrincipal))
        } catch (error) {
            console.log(error);
            res.status(401).json({ message: "Token agotados" })
        }

    }
}



export default GenerateData
