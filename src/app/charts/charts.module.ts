import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts'; // Import the NgChartsModule

import { ChartsComponent } from './charts.component';


@NgModule({
  declarations: [ChartsComponent],
  imports: [CommonModule, NgChartsModule], // Use NgChartsModule here
})
export class ChartsModule {}
