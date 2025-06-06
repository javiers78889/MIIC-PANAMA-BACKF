import { Router } from 'express'
import { Auth } from '../controllers/auth'
import { body } from 'express-validator'

const router = Router()



router.post('/login',
    body('email').isEmail().withMessage('Email no válido'),
    body('password').notEmpty().withMessage('El password no puede ir vacío'),
    Auth.Login)






export default router