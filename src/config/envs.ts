import * as dotenv from 'dotenv'
import { z } from 'zod'


dotenv.config()


const envschema = z.object({
    DATABASE_URL: z.string().nonempty({ message: 'La conexión de base de datos no puede ir vacía' }),
    TOKEN: z.string().nonempty({ message: 'El token no puede ir vacio' }),
    EMAIL: z.string().email({ message: 'El correo debe ser un email válido' }).nonempty({ message: 'El correo no puede ir vacío' }),
    PASS: z.string().nonempty({ message: 'La contraseña no puede ir vacía' }),
    FRONTEND: z.string().url({ message: 'El frontend debe ser una URL válida' }).nonempty({ message: 'El frontend no puede ir vacío' }),
    PAYPAL_CLIENT_ID: z.string().nonempty({ message: 'El ID de cliente de PayPal no puede ir vacío' }),
    PAYPAL_CLIENT_SECRET: z.string().nonempty({ message: 'El secreto de cliente de PayPal no puede ir vacío' }),
    PAYPAL_MODE: z.enum(['sandbox', 'live'])
})



const validate = envschema.parse(process.env)


if (!validate) {
    throw new Error('Error con las variables de entorno')
}


const envs = {
    DATABASE_URL: validate.DATABASE_URL,
    TOKEN: validate.TOKEN,
    EMAIL: validate.EMAIL,
    PASS: validate.PASS,
    FRONTEND: validate.FRONTEND,
    PAYPAL_CLIENT_ID: validate.PAYPAL_CLIENT_ID,
    PAYPAL_CLIENT_SECRET: validate.PAYPAL_CLIENT_SECRET,
    PAYPAL_MODE: validate.PAYPAL_MODE
}


export default envs