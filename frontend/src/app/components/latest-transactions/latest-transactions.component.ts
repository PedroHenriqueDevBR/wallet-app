import { Component, OnInit } from '@angular/core';
import { TransectionModel } from 'src/app/models/transection.model';

@Component({
  selector: 'app-latest-transactions',
  templateUrl: './latest-transactions.component.html',
  styleUrls: ['./latest-transactions.component.css']
})
export class LatestTransactionsComponent implements OnInit {

  transections: Array<TransectionModel> = [];

  constructor() {
    this.loadTransections();
  }

  ngOnInit(): void {
  }

  loadTransections(): void {
    this.transections.push(
      new TransectionModel(
        '/assets/logos/figma.png',
        'Figma',
        new Date('Jan 15 2021 5:37:00'),
        'Invest',
        '#00B6C1',
        -17.00,
      )
    );
    this.transections.push(
      new TransectionModel(
        '/assets/logos/amazon.png',
        'Amazon',
        new Date('Jan 14 2021 9:07:00'),
        'Shoping',
        '#EE3B30',
        -9256.00,
      )
    );
    this.transections.push(
      new TransectionModel(
        '/assets/logos/netflix.png',
        'Netflix',
        new Date('Jan 12 2021 12:01:00'),
        'Entertainments',
        '#C32ADC',
        -19.00,
      )
    );
    this.transections.push(
      new TransectionModel(
        '/assets/logos/twitter.png',
        'Twitter',
        new Date('Jan 10 2021 9:05:00'),
        'Income',
        '#2874CE',
        12560.00,
      )
    );
    this.transections.push(
      new TransectionModel(
        '/assets/logos/hospital.png',
        'City Hospital',
        new Date('Jan 5 2021 5:37:00 PM'),
        'Health',
        '#248845',
        59.00,
      )
    );
  }

}
