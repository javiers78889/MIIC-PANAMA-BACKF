import { Router } from "express";
import { PostController } from "../controllers/post";
import { Posts } from "../model/posts.model";
import { Users } from "../model/user.model";
import { jwtGuard } from "../middleware/jwtValidation";
import { body } from "express-validator";
import { handleInputErrors } from "../middleware/validationResult";

const router = Router()



const post = new PostController(Posts, Users)

router.post('/',
    body('name').notEmpty().withMessage('El nombre no puede ir vacio'),
    body('url').notEmpty().withMessage('La url no puede ir vacia').isURL().withMessage('Debe ser una url valida'),
    handleInputErrors,
    jwtGuard, post.createPost)

router.get('/',

    post.getPosts)


router.delete('/',
    body('id').notEmpty().withMessage('El nombre no puede ir vacio').isNumeric().withMessage("El id debe ser numerico"),
    handleInputErrors,
    jwtGuard, post.DelePost)







export default router