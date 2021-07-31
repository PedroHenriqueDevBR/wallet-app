export class CardModel {
    flag: string;
    flagImageUrl: string;
    money: number;
    cardNumber: string;
    expiringDate: string;

    constructor(flag: string, flagImageUrl: string, money: number, cardNumber: string, expiringDate: string) {
        this.flag = flag;
        this.flagImageUrl = flagImageUrl;
        this.money = money;
        this.cardNumber = cardNumber;
        this.expiringDate = expiringDate;
    }

    formatedCurrencyMoney(): string {
        return (this.money).toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
        });
    }

    formatedCardNumber(): string {
        const cardNumberParts: string[] = this.cardNumber.split(' ');
        return `${cardNumberParts[0]} **** **** ${cardNumberParts[cardNumberParts.length -1 ]}`;
    }
}