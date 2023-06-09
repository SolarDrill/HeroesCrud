import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Heroe {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    nombre!: string;

    @Column()
    alte!: string;

}