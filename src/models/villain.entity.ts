import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Villain {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    nombre!: string;

    @Column()
    villano!: string;

}