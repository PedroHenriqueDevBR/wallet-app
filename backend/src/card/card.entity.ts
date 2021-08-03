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
    validateDate: string;

    @ManyToOne(() => User, user => user.cards)
    user: User;

    @OneToMany(() => Transfer, transfer => transfer.card)
    transfers: Transfer[];

    constructor(name: string, flagImage: string, balance: number, cardNumber: string, validateDate: string) {
        this.name = name;
        this.flagImage = flagImage;
        this.balance = balance;
        this.cardNumber = cardNumber;
        this.validateDate = validateDate;
    }

    static fronObject(obj: any): Card {
        return new Card(
            obj['name'],
            obj['flagImage'],
            obj['balance'],
            obj['cardNumber'],
            obj['validateDate'],
        );
    }
}