import { Category } from "src/category/category.entity";
import { Transfer } from "src/transfer/transfer.entity";
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Receiver {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    image: string;

    @OneToMany(() => Transfer, transfer => transfer.receiver)
    transfers: Transfer[];

    @OneToOne(() => Category)
    @JoinColumn()
    category: Category;
}