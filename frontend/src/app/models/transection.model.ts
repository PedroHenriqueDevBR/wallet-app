export class TransectionModel {
    logo: string;
    name: string;
    date: Date;
    action: string;
    color: string;
    value: number;

    constructor(
        logo: string,
        name: string,
        date: Date,
        action: string,
        color: string,
        value: number,
    ){
        this.logo = logo;
        this.name = name;
        this.date = date;
        this.action = action;
        this.color = color;
        this.value = value;
    }

    formatedCurrencyMoney(): string {
        return (this.value).toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
        });
    }
}