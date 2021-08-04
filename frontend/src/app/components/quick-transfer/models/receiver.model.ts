export class Receiver {
    id: number | undefined;
    name: string;
    image: string;

    constructor(name: string, image: string) {
        this.name = name;
        this.image = image;
    }
}