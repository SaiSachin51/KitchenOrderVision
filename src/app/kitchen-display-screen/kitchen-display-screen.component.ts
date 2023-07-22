import { Component, OnInit } from '@angular/core';
import { Subject, timer } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

interface Items {
  itemName: string,
  quantity: number
}
interface Order {
  id: number;
  table: string;
  items: string[];
  status: 'pending' | 'prepared' | 'served';
  remainingTime: number;

}
@Component({
  selector: 'app-kitchen-display-screen',
  templateUrl: './kitchen-display-screen.component.html',
  styleUrls: ['./kitchen-display-screen.component.css']
})
export class KitchenDisplayScreenComponent  implements OnInit {
  orders: Order[] = [
    {
      id: 1,
      table: 'Table 1',
      items: ['Burger', 'Fries', 'Soda'],
      status: 'pending',
      remainingTime: 10 * 60, // 10 minutes in seconds (adjust as needed)
    },
    {
      id: 2,
      table: 'Table 2',
      items: ['Pizza', 'Salad', 'Juice'],
      status: 'pending',
      remainingTime: 15 * 60, // 15 minutes in seconds (adjust as needed)
    },
    // Add more sample orders if needed
  ];
items: Items[] = [];
  completedOrders: Order[] = [];
  notificationSubject: Subject<string> = new Subject<string>();
  notificationMessage: string = '';
  notificationTimeout: number = 5000; // 5 seconds
  notifications: string[] = [];

  constructor(private http: HttpClient) {

    this.fetchData();

  }

  ngOnInit() {
    this.startTimers();
  }

  startTimers() {
    setInterval(() => {
      this.updateRemainingTime();
    }, 1000); // Update the remaining time every second
  }

  updateRemainingTime() {
    for (const order of this.orders) {
      if (order.status === 'pending') {
        if (order.remainingTime > 0) {
          order.remainingTime--;
        } else {
          order.status = 'prepared';
        }
      }
    }
  }

  updateOrderStatus(order: Order, newStatus: 'prepared' | 'served') {
    if (order.status === 'pending' && newStatus === 'prepared') {
      order.status = 'prepared';
    } else if (order.status === 'prepared' && newStatus === 'served') {
      order.status = 'served';
      this.moveOrderToCompleted(order);
    }
  }

  moveOrderToCompleted(order: Order) {
    const index = this.orders.indexOf(order);
    if (index !== -1) {
      this.orders.splice(index, 1);
      this.completedOrders.push(order);
    }
  }

  getFormattedTime(seconds: number): string {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  }

  getOrderChitStyle(order: Order) {
    let style = {};
    switch (order.status) {
      case 'pending':
        style = {
          backgroundColor: '#ffc',
        };
        break;
      case 'prepared':
        style = {
          backgroundColor: '#ff0',
        };
        break;
      case 'served':
        style = {
          backgroundColor: '#afa',
        };
        break;
      default:
        break;
    }
    return style;
  }

  fetchData() {

    this.http.get<any[]>('assets/PredictionData.json').subscribe((data) => {

      this.items = data; // Assign the JSON data to the tableData array

    });
  }

 setupNotificationListener() {
    this.notificationSubject
      .pipe(debounceTime(this.notificationTimeout))
      .subscribe((message: string) => {
        this.notificationMessage = message;
        timer(this.notificationTimeout).subscribe(() => {
          this.clearNotification(message);
        });
      });
  }

  showNotification(message: string) {
    this.notifications.push(message);
    setTimeout(() => {
      this.clearNotification(message);
    }, this.notificationTimeout);
  }

  clearNotification(message: string) {
    const index = this.notifications.indexOf(message);
    if (index !== -1) {
      this.notifications.splice(index, 1);
    }
  }
  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
}
