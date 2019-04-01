import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrganisationListComponent } from './organisation-list/organisation-list.component';
import { ReportingComponent } from './reporting/reporting.component';
import { OrganisationsComponent } from './organisations/organisations.component';
import { OrdersComponent } from './orders/orders.component';
import { CodesComponent } from './codes/codes.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

export const dashboardRoutes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'organisation-list', component: OrganisationListComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'codes', component: CodesComponent },
  { path: 'organisations', component: OrganisationsComponent },
  { path: 'reporting', component: ReportingComponent },
  { path: 'admin', component: AdminComponent }

];
