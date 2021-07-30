import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { ActivityModel } from 'src/app/models/activity.model';
import { RegisterModel } from 'src/app/models/register.model';

@Component({
  selector: 'app-recent-activities',
  templateUrl: './recent-activities.component.html',
  styleUrls: ['./recent-activities.component.css']
})
export class RecentActivitiesComponent implements OnInit {
  @ViewChild("chartID", { static: true }) element: any;
  @ViewChild("chartID", { static: true }) chartElement: ElementRef;
  activity: ActivityModel = new ActivityModel([], [], true);
  monthData: ActivityModel = this.activity.getDataFromMonths();
  yearData: ActivityModel = this.activity.getDataFromYears();
  
  currentLabels: Array<string> = this.activity.getMonthLabels(this.monthData.income);
  currentIncome: Array<number> = this.activity.extractValueFromRegisterValue(this.monthData.income);
  currentExpense: Array<number> = this.activity.extractValueFromRegisterValue(this.monthData.expense);

  constructor() {
    Chart.register(...registerables);
    this.chartElement = this.element;
  }

  ngOnInit(): void {
    this.createChart();
  }

  changePeriod(value: number): void {

  }

  createChart(): void {
    new Chart(this.chartElement.nativeElement, {
      type: 'line',
      data: {
        labels: this.currentLabels,
        datasets: [
          {
            data: this.currentIncome,
            borderColor: '#00A870',
            fill: false,
          },
          {
            data: this.currentExpense,
            borderColor: '#FF7426',
            fill: true,
            backgroundColor: 'rgba(254, 115, 37, 0.1)',
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

}
