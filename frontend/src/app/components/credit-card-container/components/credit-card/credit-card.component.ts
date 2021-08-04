import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../../models/card.model';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.css']
})
export class CreditCardComponent implements OnInit {

  @Input() card: Card | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  formatedCurrencyMoney(value: number): string {
    return (value).toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
    });
}

formatedCardNumber(cardNumber: string): string {
    const cardNumberParts: string[] = cardNumber.split(' ');
    return `${cardNumberParts[0]} **** **** ${cardNumberParts[cardNumberParts.length -1 ]}`;
}

  copyMessage(): void {
    const inputAux = document.createElement('input');
    inputAux.style.position = 'fixed';
    inputAux.style.left = '0';
    inputAux.style.top = '0';
    inputAux.style.opacity = '0';
    inputAux.value = this.card!.cardNumber;
    document.body.appendChild(inputAux);
    inputAux.focus();
    inputAux.select();
    document.execCommand('copy');
    document.body.removeChild(inputAux);
    window.alert('Copied card number');
  }

}
