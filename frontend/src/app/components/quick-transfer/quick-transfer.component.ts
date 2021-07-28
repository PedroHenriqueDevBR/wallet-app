import { Component, OnInit } from '@angular/core';
import { QuickTransferService } from 'src/app/services/quick-transfer.service';

@Component({
  selector: 'app-quick-transfer',
  templateUrl: './quick-transfer.component.html',
  styleUrls: ['./quick-transfer.component.css']
})
export class QuickTransferComponent implements OnInit {

  constructor(
    private quickTransferService: QuickTransferService
  ) { }

  ngOnInit(): void {
    this.quickTransferService.getQuickTransfers().subscribe(
      (data) => {
        // QuickTransferModel.fromJsonList(data as Array<any>);
        console.log(data as Array<any>);
      }, 
      (error) => {
        console.log(error);
      }
    );
  }

}
