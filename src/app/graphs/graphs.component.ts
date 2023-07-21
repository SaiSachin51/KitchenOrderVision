import { Component } from '@angular/core';

@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.css']
})
export class GraphsComponent {
orders: any[] = [
  {
    orderTime: '09:00 AM',
    customerName: 'John Doe',
    orderDetails: 'Burger, Fries',
    predictedQuantity: 2
  },
  // Add more order data for different days and times
];
}
