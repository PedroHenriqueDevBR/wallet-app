import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavSidebarComponent } from './components/nav-sidebar/nav-sidebar.component';
import { PageActivityComponent } from './components/page-activity/page-activity.component';
import { RecentActivitiesComponent } from './components/recent-activities/recent-activities.component';
import { QuickTransferComponent } from './components/quick-transfer/quick-transfer.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavSidebarComponent,
    PageActivityComponent,
    RecentActivitiesComponent,
    QuickTransferComponent,
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
