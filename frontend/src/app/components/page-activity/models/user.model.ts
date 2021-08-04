export class User {
    name: string;
    image: string;
    firstName: string;

    constructor(name: string, image: string) {
        this.name = name;
        this.image = image;
        const names: string[] = name.split(' ');
        this.firstName = names[0];
    }
}