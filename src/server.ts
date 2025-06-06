import express from "express";
import cors from 'cors'
import routerGenerate from "./Router/routerGenerate";
import routerAuth from './Router/routerAuth'
import db from "./config/db/db";



const connectDB = async () => {
    try {
        await db.authenticate()
        db.sync()
        console.log(`Base de Datos Sincronizada`)
    } catch (error) {
        console.log(error)
    }

}

connectDB();

const server = express();

server.use(cors({ origin: '*' }))
server.use(express.json())
server.use('/generate', routerGenerate)
server.use('/auth', routerAuth)


export default server

