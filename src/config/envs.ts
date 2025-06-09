import * as dotenv from 'dotenv'
import { z } from 'zod'


dotenv.config()


const envschema = z.object({
    DATABASE_URL: z.string().nonempty({ message: 'La conexión de base de datos no puede ir vacía' }),
    TOKEN: z.string().nonempty({ message: 'El token no puede ir vacio' })
})



const validate = envschema.parse(process.env)


if (!validate) {
    throw new Error('Error con las variables de entorno')
}


const envs = {
    DATABASE_URL: validate.DATABASE_URL,
    TOKEN: validate.TOKEN
}


export default envs