import express from "express";
import cors from 'cors'
import routerGenerate from "./Router/routerGenerate";



const server = express();

server.use(cors({ origin: '*' }))
server.use(express.json())
server.use('/generate', routerGenerate)


export default server

