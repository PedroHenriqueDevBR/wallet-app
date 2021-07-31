export class ExpenseModel {
    name: string = '';
    value: number = 0.0;
    color: string = '#2874CE';

    constructor(name: string, value: number, color: string) {
        this.name = name;
        this.value = value;
        this.color = color;
    }
}