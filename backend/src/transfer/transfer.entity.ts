import { Card } from "src/card/card.entity";
import { Receiver } from "src/receiver/receiver.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Transfer {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'decimal'})
    value: number;

    @Column()
    date: Date;

    @ManyToOne(() => Card, card => card.transfers)
    card: Card;

    @ManyToOne(() => Receiver, receiver => receiver.transfers)
    receiver: Receiver;

}