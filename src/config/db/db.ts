import { Sequelize } from 'sequelize-typescript'
import * as dotenv from 'dotenv';
import { Users } from '../../model/user.model';
import envs from '../envs';
import { Posts } from '../../model/posts.model';

dotenv.config()


const db = new Sequelize(envs.DATABASE_URL, {

    dialect: 'postgres',
    models: [Users,Posts],
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        }
    },
    logging: false
})




export default db