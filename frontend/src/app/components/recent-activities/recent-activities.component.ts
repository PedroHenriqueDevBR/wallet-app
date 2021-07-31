import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { ActivityModel } from 'src/app/models/activity.model';

@Component({
  selector: 'app-recent-activities',
  templateUrl: './recent-activities.component.html',
  styleUrls: ['./recent-activities.component.css']
})
export class RecentActivitiesComponent implements OnInit {
  @ViewChild("chartID", { static: true }) chartElement!: ElementRef;
  activity: ActivityModel = new ActivityModel([], [], true);
  monthData: ActivityModel = this.activity.getDataFromMonths();
  yearData: ActivityModel = this.activity.getDataFromYears();

  chart: Chart | undefined;
  currentLabels: Array<string> = this.activity.getMonthLabels(this.monthData.income);
  currentIncome: Array<number> = this.activity.extractValueFromRegisterValue(this.monthData.income);
  currentExpense: Array<number> = this.activity.extractValueFromRegisterValue(this.monthData.expense);

  constructor() {
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    this.createChart();
  }

  changePeriod(event:any): void {
    const value: number = event.value;
    if (value == 0)  {
      this.currentLabels = this.activity.getMonthLabels(this.monthData.income);
      this.currentIncome = this.activity.extractValueFromRegisterValue(this.monthData.income);
      this.currentExpense = this.activity.extractValueFromRegisterValue(this.monthData.expense);
      this.createChart();
      return;
    }
    this.currentLabels = this.activity.getYearLabels(this.yearData.income);
    this.currentIncome = this.activity.extractValueFromRegisterValue(this.yearData.income);
    this.currentExpense = this.activity.extractValueFromRegisterValue(this.yearData.expense);
    this.createChart();
  }

  createChart(): void {
    this.chart?.destroy();
    this.chart = new Chart(this.chartElement.nativeElement, {
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
