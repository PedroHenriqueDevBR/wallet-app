import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavSidebarComponent } from './components/nav-sidebar/nav-sidebar.component';
import { PageActivityComponent } from './components/page-activity/page-activity.component';
import { RecentActivitiesComponent } from './components/recent-activities/recent-activities.component';
import { QuickTransferComponent } from './components/quick-transfer/quick-transfer.component';
import { HttpClientModule } from '@angular/common/http';

import { CreditCardContainerComponent } from './components/credit-card-container/credit-card-container.component';
import { CreditCardComponent } from './components/credit-card-container/components/credit-card/credit-card.component';
import { AddCreditCardButtonComponent } from './components/credit-card-container/components/add-credit-card-button/add-credit-card-button.component';
import { AllExpensesComponent } from './components/all-expenses/all-expenses.component';
import { ActivityCardComponent } from './components/all-expenses/conponents/activity-card/activity-card.component';
import { PieChartComponent } from './components/all-expenses/conponents/pie-chart/pie-chart.component';
import { LatestTransactionsComponent } from './components/latest-transactions/latest-transactions.component';

@NgModule({
  declarations: [
    AppComponent,
    NavSidebarComponent,
    PageActivityComponent,
    RecentActivitiesComponent,
    QuickTransferComponent,
    CreditCardContainerComponent,
    CreditCardComponent,
    AddCreditCardButtonComponent,
    AllExpensesComponent,
    ActivityCardComponent,
    PieChartComponent,
    LatestTransactionsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
