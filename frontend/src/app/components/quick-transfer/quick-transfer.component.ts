import { Component, OnInit } from '@angular/core';
import { ReceiverService } from 'src/app/services/receiver.service';
import { Receiver } from './models/receiver.model';

@Component({
  selector: 'app-quick-transfer',
  templateUrl: './quick-transfer.component.html',
  styleUrls: ['./quick-transfer.component.css']
})
export class QuickTransferComponent implements OnInit {
  currencies: Array<string> = ['USD', 'BRL']
  quickTransfers: Array<Receiver> = [];
  selectedQuickTranfer: number | undefined = undefined;
  selectedCurrency: string = '';

  constructor(private receiverService: ReceiverService) { }

  changeCurrency(event: any): void {
    this.selectedCurrency = this.currencies[event.value];
  }

  changeQuickTransfer(index: number): void {
    if (this.selectedQuickTranfer == index) {
      this.selectedQuickTranfer = undefined;
      return;
    }
    this.selectedQuickTranfer = index;
  }

  ngOnInit(): void {
    this.getReceivers();
  }

  getReceivers(): void {
    const result = this.receiverService.getTransfers().subscribe(
      (data:Receiver[]) => {
        this.quickTransfers = data;
      },
      error => console.log(error),
    );
  }

}
