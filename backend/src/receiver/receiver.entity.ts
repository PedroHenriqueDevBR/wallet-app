import { Transfer } from "src/transfer/transfer.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Receiver {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    image: string;

    @Column()
    category: string;

    @Column()
    color: string;

    @OneToMany(() => Transfer, transfer => transfer.receiver)
    transfers: Transfer[];

    constructor(name: string, image: string, category: string, color: string) {
        this.name = name;
        this.image = image;
        this.category = category;
        this.color = color;
    }

    static fronObject(body: any): Receiver {
        return new Receiver(body['name'], body['image'], body['category'], body['color']);
    }
}
