import { Table, Column, Model, DataType, Default } from 'sequelize-typescript'


@Table({
    tableName: 'users'
})


export class Users extends Model {
    @Column({
        type: DataType.STRING(255),
        allowNull: false
    })
    email: string
    @Column({
        type: DataType.STRING(255),
        allowNull: false
    })
    password: string
    @Column({
        type: DataType.STRING(255),
        allowNull: false
    })
    name: string
    @Column({
        type: DataType.STRING(255),
        allowNull: false
    })
    lastname: string
    @Column({
        type: DataType.STRING(255),
        allowNull: false
    })
    cedula: string

    @Default(false)
    @Column({
        type: DataType.STRING(5),
        allowNull: true
    })
    token: string

    @Default(false)
    @Column({
        type: DataType.BOOLEAN,

    })
    auth: boolean
    @Default(0)
    @Column({
        type: DataType.INTEGER,

    })
    cant_token: number


}