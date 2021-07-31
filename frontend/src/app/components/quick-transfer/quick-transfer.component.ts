import { Component, OnInit } from '@angular/core';
import { QuickTransferService } from 'src/app/services/quick-transfer.service';

@Component({
  selector: 'app-quick-transfer',
  templateUrl: './quick-transfer.component.html',
  styleUrls: ['./quick-transfer.component.css']
})
export class QuickTransferComponent implements OnInit {
  currencies: Array<string> = ['USD', 'BRL']
  quickTransfers: Array<string> = ['Jane', 'Esther', 'Ronald', 'Cameron', 'Robert','Darlene', 'Coby'];
  selectedQuickTranfer: number | undefined = undefined;
  selectedCurrency: string = '';

  constructor() { }

  changeCurrency(event: any) : void {
    this.selectedCurrency = this.currencies[event.value];
  }

  changeQuickTransfer(index: number) : void {
    if (this.selectedQuickTranfer == index) {
      this.selectedQuickTranfer = undefined;
      return;
    }
    this.selectedQuickTranfer = index;
  }

  ngOnInit(): void {
  }

}
