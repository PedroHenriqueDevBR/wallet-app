import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/services/card.service';
import { Card } from './models/card.model';

@Component({
  selector: 'app-credit-card-container',
  templateUrl: './credit-card-container.component.html',
  styleUrls: ['./credit-card-container.component.css']
})
export class CreditCardContainerComponent implements OnInit {

  cards: Array<Card> = [];

  constructor(private service: CardService) {
    this.setCards();
  }

  ngOnInit(): void {
    this.getCards();
  }

  getCards(): void {
    this.service.getCards().subscribe(
      (data: Card[]) => {
        this.cards = data;
      }
    );
  }

  setCards(): void {
    this.cards.push(
      new Card(
        'Visa',
        'https://logodownload.org/wp-content/uploads/2016/10/visa-logo-1.png',
        95400,
        '0077 1578 4851 3814',
        '04/24',
      ),
      new Card(
        'MasterCard',
        'https://marcas-logos.net/wp-content/uploads/2020/03/Mastercard-Logo-1-600x375.png',
        21848,
        '1578 0077 3814 4851',
        '06/20',
      ),
    );
  }

  saveCard(response: Card): void {
    const card: Card = new Card(
      response.name,
      response.flagImage,
      response.balance,
      response.cardNumber,
      response.validateDate,
    );
    this.cards.push(card);
  }

}
