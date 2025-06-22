import { Router } from 'express'
import { Auth } from '../controllers/auth'
import { body } from 'express-validator'
import { handleInputErrors } from '../middleware/validationResult'
import { Users } from '../model/user.model'
import { limiter } from '../middleware/limiter'
import { Mailer } from '../controllers/mailer'


const router = Router()

const auth = new Auth(Users,Mailer)

//router.use(limiter)

router.post('/login',
    body('email').isEmail().withMessage('Email no válido'),
    body('password').notEmpty().withMessage('El password no puede ir vacío'),
    handleInputErrors,
    auth.Login)


router.post('/create-user',
    body('email').isEmail().withMessage('Email no válido'),
    body('cedula').notEmpty().withMessage('cedula no válido'),
    body('name').notEmpty().withMessage('name no válido'),
    body('lastname').notEmpty().withMessage('lastname no válido'),
    body('password').notEmpty().withMessage('El password no puede ir vacío'),
    handleInputErrors,
    auth.createUser
)

router.post('/validate-token',
    body('token').notEmpty().withMessage('El token no puede ir vacío.'),
    handleInputErrors,
    auth.validatejwt
)

router.post('/validate-account',
    body('token').notEmpty().withMessage('El token no puede ir vacío.'),
    handleInputErrors,
    auth.validateAccount
)

router.post('/recovery-password',
    body('email').isEmail().withMessage('Email no válido'),
    handleInputErrors,
    auth.recoveryPassword
)
router.post('/verify-token-recovery',
    body('token').notEmpty().withMessage('El token no puede ir vacío.'),
    handleInputErrors,
    auth.verifyTokenRecovery
)

router.post('/new-user-password',
    body('token').notEmpty().withMessage('El token no puede ir vacío.'),
    body('password').notEmpty().withMessage('El password no puede ir vacío'),
    handleInputErrors,
    auth.newUserPassword
)







export default router
