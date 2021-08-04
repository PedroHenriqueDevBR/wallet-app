export class Card {
    name: string;
    flagImage: string;
    balance: number;
    cardNumber: string;
    validateDate: string;

    constructor(flag: string, flagImageUrl: string, money: number, cardNumber: string, expiringDate: string) {
        this.name = flag;
        this.flagImage = flagImageUrl;
        this.balance = money;
        this.cardNumber = cardNumber;
        this.validateDate = expiringDate;
    }
}