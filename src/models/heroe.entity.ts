import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Heroe {

    @PrimaryGeneratedColumn()
    id!: number

    @Column('text')
    nombre!: string

    @Column('text')
    alter!: string

}