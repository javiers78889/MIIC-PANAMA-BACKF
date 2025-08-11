import { Request, Response } from 'express'
import { Users } from '../model/user.model'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import envs from '../config/envs'
import { generatteToken } from '../utils/generateToken'
import { Mailer } from './mailer'



export class Auth {

    constructor(private readonly userService: typeof Users,
        private readonly mailer: typeof Mailer
    ) { }

    Login = async (req: Request, res: Response) => {
        const { email, password } = req.body

        try {
            const validate = await this.userService.findOne({ where: { email } })
            if (!validate.dataValues.auth) {
                res.status(401).json({ message: "Su cuenta no esta verificada" })
            }
            else {


                if (validate.dataValues) {
                    const pwd = await bcrypt.compare(password, validate.dataValues.password)
                    const { id } = validate.dataValues
                    if (pwd) {

                        const token = jwt.sign({ data: id }, process.env.TOKEN, { expiresIn: 60 * 60 })
                        res.status(200).json({ token, message: 'Usuario validado' })
                    } else {

                        res.status(401).json({ message: "No validado" })
                    }

                } else {

                    res.status(401).json({ message: "No validado" })
                }
            }

        } catch (error) {
            console.log(error);
            res.status(400).json({ message: 'No validado' })
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
                token: generatteToken(),
                password: await bcrypt.hash(password, 12),
            }
            const { token, email: mail } = data
            const usuario = await this.userService.create(data)
            usuario.save()

            await this.mailer.sendEmail(mail, 'Valide su cuenta', 'Valide su cuenta', token, 'confirmar', '/auth/confirm-account')

            res.status(200).json({ message: 'Usuario Creado, revise su correo para validarlo' })
        } catch (error) {
            res.status(401).json({ message: error.message })
        }
    }

    validatejwt = async (req: Request, res: Response) => {
        const { token } = req.body
        try {
            jwt.verify(token, envs.TOKEN)
            res.status(200).json({ message: 'Validado' })
        } catch (error) {
            console.log(error);
            res.status(401).json({ message: 'Token no válida' })
        }
    }

    validateAccount = async (req: Request, res: Response) => {
        const { token } = req.body
        try {
            const usuario = await this.userService.findOne({ where: { token } })
            if (usuario) {
                usuario.auth = true;
                usuario.token = '';
                await usuario.update(usuario);
                res.status(200).json({ message: 'Cuenta validada' });
            } else {
                res.status(404).json({ message: 'Token inválido o usuario no encontrado' });
            }
        } catch (error) {
            res.status(404).json({ message: error.message })
        }
    }

    recoveryPassword = async (req: Request, res: Response) => {
        const { email } = req.body
        try {
            const usuario = await this.userService.findOne({ where: { email } })
            if (usuario) {
                usuario.token = generatteToken();
                await usuario.update(usuario);
                await this.mailer.sendEmail(usuario.dataValues.email, 'Recuperación de Cuenta', 'Recuperación de Cuenta', usuario.dataValues.token, 'recuperar', '/auth/recovery-password-validate')
                res.status(200).json({ message: `Revise su correo ${email}` });
            } else {
                res.status(404).json({ message: 'correo no encontrado' });
            }
        } catch (error) {
            res.status(404).json({ message: error.message })
        }
    }

    verifyTokenRecovery = async (req: Request, res: Response) => {
        const { token } = req.body
        try {
            const usuario = await this.userService.findOne({ where: { token } })
            if (usuario) {
                res.status(200).json({ message: `Token válido ${usuario.dataValues.name} ${usuario.dataValues.lastname}`, token: usuario.dataValues.token });
            } else {
                res.status(404).json({ message: 'Token inválido o usuario no encontrado' });
            }
        } catch (error) {
            res.status(404).json({ message: error.message })
        }
    }
    newUserPassword = async (req: Request, res: Response) => {
        const { token, password } = req.body
        try {
            const usuario = await this.userService.findOne({ where: { token } })
            if (usuario) {

                usuario.password = await bcrypt.hash(password, 12)
                usuario.token = ''
                await usuario.update(usuario)
                res.status(200).json({ message: `Contraseña Actualizada Correctamente` });
            } else {
                res.status(404).json({ message: 'Error al Actualizar Contraseña' });
            }
        } catch (error) {
            res.status(404).json({ message: error.message })
        }
    }


    buyTtoken = async (req: Request, res: Response) => {

        try {
            const decoded = jwt.decode(req.headers.authorization?.split(' ')[1]);
            if (typeof decoded === 'object') {
                const user = await this.userService.findOne({ where: { id: decoded.data } });
                const quantity = Number(req.body.quantity);

                if (user) {
                    const tokens = quantity + (Number.isNaN(+user.dataValues.cant_token) ? 0 : +user.dataValues.cant_token);
                    console.log(tokens);
                    await user.update({ cant_token: +tokens });

                    res.json({ message: `${tokens} Tokens comprados ` });
                }
            } else {
                res.status(400).json({ error: 'Token inválido o sin datos' });
            }

        } catch (error) {
            res.status(500).json({ error: error.message });
        }

    }
    userOnline = async (req: Request, res: Response) => {

        try {
            const decoded = jwt.decode(req.headers.authorization?.split(' ')[1]);
            if (typeof decoded === 'object') {
                const user = await this.userService.findOne({ where: { id: decoded.data }, attributes: ['name', 'cant_token'] });

                res.json(user);
            } else {
                res.status(400).json({ error: 'Token inválido o sin datos' });
            }

        } catch (error) {
            res.status(500).json({ error: error.message });
        }

    }

}
