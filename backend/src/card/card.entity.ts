import { Transfer } from "src/transfer/transfer.entity";
import { User } from "src/user/user.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Card {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    flagImage: string;

    @Column()
    balance: number;

    @Column()
    cardNumber: string;

    @Column()
    validateDate: Date;

    @ManyToOne(() => User, user => user.cards)
    user: User;

    @OneToMany(() => Transfer, transfer => transfer.card)
    transfers: Transfer[];
}