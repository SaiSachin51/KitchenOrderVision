import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KitchenComponent } from './kitchen/kitchen.component';
import { KitchenDisplayScreenComponent } from './kitchen-display-screen/kitchen-display-screen.component';
import { InventoryComponent } from './inventory/inventory.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { AssetsComponent } from './assets/assets.component';
import { ReportsComponent } from './reports/reports.component';
import { GraphsComponent } from './graphs/graphs.component';
import { LeftPanelComponent } from './left-panel/left-panel.component';
import { TopbarComponent } from './topbar/topbar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ChartsComponent } from './charts/charts.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    KitchenComponent,
    KitchenDisplayScreenComponent,
    InventoryComponent,
    MaintenanceComponent,
    AssetsComponent,
    ReportsComponent,
    GraphsComponent,
    LeftPanelComponent,
    TopbarComponent,
    ChartsComponent,
   
  ],
  imports: [
    BrowserModule,
    RouterModule, // Import RouterModule here
    AppRoutingModule, // Import the AppRoutingModule
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
