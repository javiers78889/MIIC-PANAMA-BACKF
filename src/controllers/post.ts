import { Posts } from "../model/posts.model";
import { Request, Response } from "express";
import { Users } from "../model/user.model";
import jwt from "jsonwebtoken";

export class PostController {

    constructor(
        private readonly postService: typeof Posts,
        private readonly userService: typeof Users
    ) { }

    createPost = async (req: Request, res: Response) => {
        const userId = req.headers.authorization?.split(' ')[1]


        const decoded = jwt.decode(userId);

        if (decoded && typeof decoded !== 'string') {
            const user = await this.userService.findByPk(decoded.data, { attributes: ['role'] });
            res.json({ user })


            const { name, url } = req.body
            const post = new this.postService({ name, url })

            await post.save()


            res.status(201).json({ message: 'Post creado' })

        } else {

            res.status(401).json({ message: 'No autorizado' })

        }

    }


    getPosts = async (req: Request, res: Response) => {

        const posts = await this.postService.findAll()

        if (posts.length === 0) {
            res.status(404).json({ message: 'No hay posts' })
        } else {
            res.json(posts)
        }

    }

    getPostbyId = async (id: number) => {
        const find = await this.postService.findByPk(id)

        return find
    }
    DelePost = async (req: Request, res: Response) => {

        const { id } = req.body

        const post = await this.getPostbyId(id)

        if (post) {
            await this.postService.destroy({ where: { id } })
            res.status(201).json({ message: "Post eliminado correctamente" })
        }

    }
}