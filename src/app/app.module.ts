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
import { ChartsModule } from './charts/charts.module';
import { HttpClientModule } from '@angular/common/http';


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
    TopbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule, // Import RouterModule here
    AppRoutingModule, // Import the AppRoutingModule
    ChartsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
