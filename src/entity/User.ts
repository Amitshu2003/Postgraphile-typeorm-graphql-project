import {Entity, Column, PrimaryGeneratedColumn, OneToMany} from 'typeorm'
import { Todo } from './Todo'

@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    name:string

    @OneToMany(()=>Todo, todo=>todo.user)
    todos:[Todo]
}