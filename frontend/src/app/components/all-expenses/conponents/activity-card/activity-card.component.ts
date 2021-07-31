import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity-card',
  templateUrl: './activity-card.component.html',
  styleUrls: ['./activity-card.component.css']
})
export class ActivityCardComponent implements OnInit {
  @Input() title: string = '';
  @Input() value: string = '';
  @Input() imageAsset: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
