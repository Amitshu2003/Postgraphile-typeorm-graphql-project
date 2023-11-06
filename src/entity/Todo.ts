import {Entity, Column, PrimaryGeneratedColumn, ManyToOne} from 'typeorm'
import { User } from './User'

@Entity()
export class Todo{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    title:string

    @Column()
    desc:string

    @ManyToOne(()=>User, user=>user.todos)
    user:User
}