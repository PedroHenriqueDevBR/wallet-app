import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { ActivityModel } from 'src/app/models/activity.model';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {
  @ViewChild("chartID", { static: true }) chartElement!: ElementRef;
  chart: Chart | undefined;

  constructor() { }

  ngOnInit(): void {
    this.createChart();
  }

  createChart(): void {
    this.chart?.destroy();
    this.chart = new Chart(this.chartElement.nativeElement, {
      type: 'doughnut',
      data: {
        datasets: [
          {
            data: [10, 20, 30, 40, 50, 45, 60, 23, 100],
            backgroundColor: [
              '#2874CE',
              '#248845',
              '#00B6C1',
              '#F46D21',
              '#EE3B30',
              '#6935DA',
              '#0090AD',
              '#C32ADC',
              '#6C3C62',
            ],
          }
        ]
      },
      options: {
        cutout: 80,
      },
    },
    );
  }

}
