import jwt from 'jsonwebtoken'
import { Request, Response, NextFunction } from 'express'

export const jwtGuard = (req: Request, res: Response, next: NextFunction) => {
    const auth = req.headers.authorization

    if (auth) {
        const token = auth.split(' ')[1]

        try {
            jwt.verify(token, process.env.TOKEN as string)
            next()
        } catch (error) {
            res.status(401).json({message:'Token no valido'})
        }

    }
    else {
        res.status(401).json({ message: 'No tiene un token' })
    }
}
