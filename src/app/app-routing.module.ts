
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KitchenComponent } from './kitchen/kitchen.component';
import { InventoryComponent } from './inventory/inventory.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { AssetsComponent } from './assets/assets.component';
import { ReportsComponent } from './reports/reports.component';
import { ChartsComponent } from './charts/charts.component';
import { GraphsComponent } from './graphs/graphs.component';
import { KitchenDisplayScreenComponent } from './kitchen-display-screen/kitchen-display-screen.component';

const routes: Routes = [
  { path: 'kitchen', component: KitchenComponent },
  { path: 'kds', component: KitchenDisplayScreenComponent },
  { path: 'inventory', component: InventoryComponent },
  { path: 'maintenance', component: MaintenanceComponent },
  { path: 'assets', component: AssetsComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'charts', component: ChartsComponent },
  { path: 'graphs', component: GraphsComponent },
  { path: '', redirectTo: '/kitchen', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
