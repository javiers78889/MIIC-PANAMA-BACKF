import { Request, Response } from 'express'
import { Users } from '../model/user.model'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
export class Auth {

    constructor(private readonly userService: typeof Users) { }

    Login = async (req: Request, res: Response) => {
        const { email, password } = req.body

        try {
            const validate = await this.userService.findOne({ where: { email } })


            if (validate) {
                const pwd = await bcrypt.compare(password, validate.dataValues.password)
                const { id } = validate.dataValues
                if (pwd) {

                    const token = jwt.sign({ data: id }, process.env.TOKEN, { expiresIn: 60 * 60 })
                    res.status(200).json({ token, message: 'Usuario validado' })
                } else {

                    res.status(401).json("No validado")
                }

            } else {

                res.status(401).json("No validado")
            }

        } catch (error) {
            res.status(400).json(error.message)
        }





    }

    findOne = async (email: string, cedula: string) => {
        const verifyEmail = await this.userService.findOne({ where: { email } })
        const verifyCedula = await this.userService.findOne({ where: { cedula } })

        if (verifyCedula || verifyEmail) {
            throw new Error('Este Usuario ya existe.')
        }

    }


    createUser = async (req: Request, res: Response) => {
        const { email, cedula, password } = req.body

        try {
            await this.findOne(email, cedula)
            const data = {
                ...req.body,
                password: await bcrypt.hash(password, 12)
            }
            const usuario = await this.userService.create(data)
            usuario.save()

            res.status(200).json({ message: 'Usuario Creado, revise su correo para validarlo' })
        } catch (error) {
            res.status(401).json(error.message)
        }






    }

}