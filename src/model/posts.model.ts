import { Table, Column, Model, DataType } from 'sequelize-typescript'


@Table({
    tableName: 'posts'
})


export class Posts extends Model {
    @Column({
        type: DataType.STRING(800),
        allowNull: false
    })
    name: string
    @Column({
        type: DataType.STRING(255),
        allowNull: false
    })
    url: string
}