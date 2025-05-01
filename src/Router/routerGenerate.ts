import { Router } from "express";
import GenerateData from "../controllers/generate";
import { body } from "express-validator";
import { handleInputErrors } from "../middleware/validationResult";



const router = Router()


router.post('/',
    body('causa').notEmpty().withMessage('La causa no puede ir vacia'),
    body('problema').notEmpty().withMessage('El problema no puede ir vacio'),
    body('sujeto').notEmpty().withMessage('El sujeto no puede ir vacio'),
    body('contexto').notEmpty().withMessage('El contexto no puede ir vacio'),
    handleInputErrors,
    GenerateData.sendData)


export default router