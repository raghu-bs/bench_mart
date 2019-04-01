import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { AgmCoreModule } from '@agm/core';
import { ChartModule } from 'angular-highcharts';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { OrganisationListComponent } from './organisation-list/organisation-list.component';
import { OrdersComponent } from './orders/orders.component';
import { CodesComponent } from './codes/codes.component';
import { OrganisationsComponent } from './organisations/organisations.component';
import { ReportingComponent } from './reporting/reporting.component';
import { AdminComponent } from './admin/admin.component';
import { dashboardRoutes } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    DashboardComponent,
    OrganisationListComponent,
    OrdersComponent,
    CodesComponent,
    OrganisationsComponent,
    ReportingComponent,
    AdminComponent,
  ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAP_API_KEY'
    }),
    ChartModule,
    MatTableModule,
    MatSnackBarModule,
    MatCheckboxModule,
    MatInputModule,
    MatFormFieldModule,
    MatBadgeModule,
    MatMenuModule,
    LayoutModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    RouterModule,
    RouterModule.forRoot(dashboardRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
