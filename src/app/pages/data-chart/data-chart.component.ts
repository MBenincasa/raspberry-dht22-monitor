import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-data-chart',
  templateUrl: './data-chart.component.html',
  styleUrls: ['./data-chart.component.css']
})
export class DataChartComponent implements OnInit {

  @Input() group: any;
  @ViewChild('lineChart') lineChart!: ElementRef;
  chart: any;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    Chart.register(...registerables);
    this.createLineChart();
  }

  createLineChart() {
    const chartData = this.group.items.map((item: { time: any; temperature: any; humidity: any; }) => {
      return { x: item.time, y1: item.temperature, y2: item.humidity };
    });
    this.chart = new Chart(this.lineChart.nativeElement, {
      type: 'line',
      data: {
        labels: chartData.map((item: { x: any; }) => item.x),
        datasets: [
          {
            label: 'Temperature (°C)',
            data: chartData.map((item: { y1: any; }) => item.y1),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            fill: false,
            yAxisID: 'y1'
          },
          {
            label: 'Humidity (%)',
            data: chartData.map((item: { y2: any; }) => item.y2),
            borderColor: 'rgb(54, 162, 235)',
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            fill: false,
            yAxisID: 'y'
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            min: 0,
            max: 100,
            position: 'left'
          },
          y1: {
            min: 5,
            max: 35,
            position: 'right'
          }
        }
      }
    });
  }

}
