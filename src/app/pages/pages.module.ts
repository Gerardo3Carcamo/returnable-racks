import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddReportComponent } from './components/add-report/add-report.component';


@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    AddReportComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
