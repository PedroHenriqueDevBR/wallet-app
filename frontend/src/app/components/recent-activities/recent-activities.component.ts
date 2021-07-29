import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-recent-activities',
  templateUrl: './recent-activities.component.html',
  styleUrls: ['./recent-activities.component.css']
})
export class RecentActivitiesComponent implements OnInit {
  @ViewChild("chartID", { static: true }) element: any;
  @ViewChild("chartID", { static: true }) chartElement: ElementRef;

  constructor() {
    Chart.register(...registerables);
    this.chartElement = this.element;
  }

  createChart(): void {
    new Chart(this.chartElement.nativeElement, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
          {
            data: [1000, 1200, 1500, 4000, 3202, 2103, 3451, 345, 3219, 2985, 1102, 4654],
            borderColor: '#00A870',
            fill: false,
          },
          {
            data: [1200, 1000, 1450, 2000, 3202, 2003, 3751, 1045, 2219, 2985, 4102, 654],
            borderColor: '#FF7426',
            fill: false,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: {
          intersect: false,
        },
        elements: {
          line: {
            tension: 0.5,
          },
          point: {
            radius: 0,
          }
        },
        plugins: {
          legend: {
            display: false
          },
          title: {
            display: false
          },
          subtitle: {
            display: false
          },
        },
      },
    },
    );
  }

  ngOnInit(): void {
    this.createChart();
  }

}
