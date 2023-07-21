import { Component, OnInit } from '@angular/core';

interface InventoryItem {
  name: string;
  quantity: number;
  expiryDate: string;
}

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  public inventory: InventoryItem[] = [];

  ngOnInit(): void {
    // Generate 20 random sample records for the kitchen inventory
    for (let i = 1; i <= 15; i++) {
      this.inventory.push({
        name: `Item ${i}`,
        quantity: Math.floor(Math.random() * 100) + 1,
        expiryDate: this.getRandomDate(),
      });
    }
  }

  private getRandomDate(): string {
    const today = new Date();
    const randomDays = Math.floor(Math.random() * 365) + 1;
    const randomDate = new Date(today.getTime() + randomDays * 24 * 60 * 60 * 1000);
    return randomDate.toISOString().slice(0, 10);
  }
}