import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  tableData: any[] = []; // Array to store the JSON data

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchData(); // Fetch the data when the component initializes
  }

  fetchData() {
    this.http.get<any[]>('assets/data.json').subscribe((data) => {
      this.tableData = data; // Assign the JSON data to the tableData array
    });
  }
}
