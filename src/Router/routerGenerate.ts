import { Router } from "express";
import GenerateData from "../controllers/generate";
import { body } from "express-validator";
import { handleInputErrors } from "../middleware/validationResult";
import { jwtGuard } from "../middleware/jwtValidation";
import { limiterQuery } from "../middleware/limiter";



const router = Router()

//router.use(limiterQuery)

router.post('/',
    body('causa').notEmpty().withMessage('La causa no puede ir vacia'),
    body('problema').notEmpty().withMessage('El problema no puede ir vacio'),
    body('sujeto').notEmpty().withMessage('El sujeto no puede ir vacio'),
    body('contexto').notEmpty().withMessage('El contexto no puede ir vacio'),
    body('verbo').notEmpty().withMessage('El verbo no puede ir vacio'),
    body('preposicion').notEmpty().withMessage('La preposicion no puede ir vacio'),
    body('interrogante').notEmpty().withMessage('La interrogante no puede ir vacia'),
    body('subproblemas').isArray().optional(),
    body('subcausas').isArray().optional(),

    handleInputErrors,
    jwtGuard,
    GenerateData.sendData)


export default router
