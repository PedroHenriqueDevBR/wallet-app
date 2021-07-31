import { Component, OnInit } from '@angular/core';
import { ExpenseModel } from 'src/app/models/expense.model';

@Component({
  selector: 'app-all-expenses',
  templateUrl: './all-expenses.component.html',
  styleUrls: ['./all-expenses.component.css']
})
export class AllExpensesComponent implements OnInit {
  expenses: Array<ExpenseModel> = [
    new ExpenseModel('Income', 1000, '#2874CE'),
    new ExpenseModel('Health', 1000, '#248845'),
    new ExpenseModel('Invest', 1000, '#00B6C1'),
    new ExpenseModel('Learning', 1000, '#F46D21'),
    new ExpenseModel('Shoping', 1000, '#EE3B30'),
    new ExpenseModel('Food', 1000, '#6935DA'),
    new ExpenseModel('Travel', 1000, '#0090AD'),
    new ExpenseModel('Entertainments', 1000, '#C32ADC'),
    new ExpenseModel('Others', 1000, '#6C3C62'),
  ];

  constructor() { }

  ngOnInit(): void {
  }
  
  changePeriod(event: any) :void {

  }

}
