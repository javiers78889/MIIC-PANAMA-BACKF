import express from "express";
import cors from 'cors'
import routerGenerate from "./Router/routerGenerate";
import routerAuth from './Router/routerAuth'
import db from "./config/db/db";



async function connectDB() {
    try {
        await db.authenticate()
        db.sync()
        console.log(`Base de Datos Sincronizada`)
    } catch (error) {
        console.log(error)
        console.log('Hubo un error al conectarse a la base de datos')
    }

}

connectDB();

const server = express();
server.set("trust proxy",true)

server.use(cors({ origin: '*' }))
server.use(express.json())
server.use('/generate', routerGenerate)
server.use('/auth', routerAuth)


export default server

