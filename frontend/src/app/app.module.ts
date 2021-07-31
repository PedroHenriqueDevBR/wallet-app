import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavSidebarComponent } from './components/nav-sidebar/nav-sidebar.component';
import { PageActivityComponent } from './components/page-activity/page-activity.component';
import { RecentActivitiesComponent } from './components/recent-activities/recent-activities.component';
import { QuickTransferComponent } from './components/quick-transfer/quick-transfer.component';
import { HttpClientModule } from '@angular/common/http';
import { CreditCardContainerComponent } from './components/credit-card-container/credit-card-container.component';
import { CreditCardComponent } from './components/credit-card/credit-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavSidebarComponent,
    PageActivityComponent,
    RecentActivitiesComponent,
    QuickTransferComponent,
    CreditCardContainerComponent,
    CreditCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
