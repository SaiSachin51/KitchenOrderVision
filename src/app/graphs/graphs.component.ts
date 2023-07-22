import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.css']
})
export class GraphsComponent implements OnInit {
  formData: any = {}; // Object to store form data
  submittedData: any = null; // Array to store the submitted data
  displayExtraColumn = false;

  constructor(private http: HttpClient) {

  }
  ngOnInit() {
    this.fetchData(); // Fetch the data when the component initializes
  }

  fetchData() {
    this.http.get<any[]>('assets/data.json').subscribe((data) => {
      this.formData = data; // Assign the JSON data to the tableData array
    });
  }
  onSubmit(): void {
    debugger;
    if (this.formData) {
      // Add the form data to the submittedData array
      this.http.get<any[]>('assets/PredictionData.json').subscribe((data) => {
        this.submittedData = data; // Assign the JSON data to the tableData array
      });
      // Clear the form fields after submission (optional)
      // this.formData = {};
    }
  }
}