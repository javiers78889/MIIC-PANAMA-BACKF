import { Sequelize } from 'sequelize-typescript'
import * as dotenv from 'dotenv';
import { Users } from '../../model/user.model';
import envs from '../envs';

dotenv.config()


const db = new Sequelize(envs.DATABASE_URL, {

    dialect: 'postgres',
    models: [Users],
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        }
    },
    logging: false
})




export default db