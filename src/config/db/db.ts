import { Sequelize } from 'sequelize-typescript'
import * as dotenv from 'dotenv';
import { Users } from '../../model/user.model';

dotenv.config()

const databaseUrl = process.env.DATABASE_URL

console.log(databaseUrl)
const db = new Sequelize(databaseUrl, {
    dialect: 'postgres',
    models: [Users]
})




export default db