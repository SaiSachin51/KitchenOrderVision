import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chart, ChartOptions } from 'chart.js'; // Make sure to include ChartOptions here

@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.css']
})
export class GraphsComponent {
  formData: any = {};
  submittedData: any[] = [];
  radarChart!: Chart; // Use non-null assertion operator (!)

  onSubmit() {
    // Here, you would handle the form submission logic and populate the submittedData array
    // For demonstration purposes, I'll populate it with sample data.
    this.submittedData = [
      { itemName: 'Item 1', quality: 8 },
      { itemName: 'Item 2', quality: 7 },
      { itemName: 'Item 3', quality: 9 },
      { itemName: 'Item 4', quality: 6 },
      { itemName: 'Item 5', quality: 7 }
    ];

    // Call the function to render the radar chart
    this.renderRadarChart();
  }

  renderRadarChart() {
    const labels = this.submittedData.map(item => item.itemName);
    const data = {
      labels: labels,
      datasets: [
        {
          label: 'Quality',
          data: this.submittedData.map(item => item.quality),
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }
      ]
    };

    const options: ChartOptions<'radar'> = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        r: {
          beginAtZero: true // Place beginAtZero directly under the 'r' scale
        }
      },
      plugins: {
        legend: {
          display: true,
          position: 'top'
        },
        title: {
          display: true,
          text: 'Radar Chart'
        }
      }
    };

    if (this.radarChart) {
      this.radarChart.destroy();
    }

    const canvas: HTMLCanvasElement = document.getElementById('radarChart') as HTMLCanvasElement;
    const ctx: CanvasRenderingContext2D = canvas.getContext('2d')!;

    this.radarChart = new Chart(ctx, {
      type: 'radar', // Make sure the type is 'radar'
      data: data,
      options: options
    });
  }
}