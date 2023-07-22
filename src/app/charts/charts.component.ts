import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  tableData: any[] = []; // Array to store the JSON data
  filteredTableData: any[] = []; // To store the filtered data based on selected date
  selectedDate: string; // Change the type to string
  
  constructor(private http: HttpClient) {
    this.selectedDate = ''; // Initialize with an empty string or any default value

  }

  ngOnInit() {
    this.fetchData(); // Fetch the data when the component initializes
  }

  fetchData() {
    this.http.get<any[]>('assets/data.json').subscribe((data) => {
      this.tableData = data; // Assign the JSON data to the tableData array
    });
  }
  onDateSelected(): void {
    debugger;
    // If a date is selected, filter the table data based on the selected date
    if (this.selectedDate) {
      this.filteredTableData = this.tableData.filter((row) => {
        // Assuming you have a date property in each row
        console.log('Row Date:', row.date, 'Selected Date:', this.selectedDate);
        return row.date === this.selectedDate;
      });
      console.log('Filtered Data:', this.filteredTableData);
    } else {
      // If no date is selected, show all data (reset the filtered data)
      this.filteredTableData = this.tableData;
    }
  }
}
