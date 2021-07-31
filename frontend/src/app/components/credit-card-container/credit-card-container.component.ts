import { Component, OnInit } from '@angular/core';
import { CardModel } from 'src/app/models/card.model';

@Component({
  selector: 'app-credit-card-container',
  templateUrl: './credit-card-container.component.html',
  styleUrls: ['./credit-card-container.component.css']
})
export class CreditCardContainerComponent implements OnInit {

  cards: Array<CardModel> = [];

  constructor() {
    this.setCards();
  }

  setCards(): void {
    this.cards.push(
      new CardModel(
        'Visa',
        'https://logodownload.org/wp-content/uploads/2016/10/visa-logo-1.png',
        95400,
        '0077 1578 4851 3814',
        '04/24',
      ),
      new CardModel(
        'MasterCard',
        'https://marcas-logos.net/wp-content/uploads/2020/03/Mastercard-Logo-1-600x375.png',
        21848,
        '1578 0077 3814 4851',
        '06/20',
      ),
    );
  }

  ngOnInit(): void {
    
  }

}
