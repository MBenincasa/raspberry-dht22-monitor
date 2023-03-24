import { Component, Input, OnInit } from '@angular/core';
import { mean, max, min } from 'mathjs';

@Component({
  selector: 'app-data-info',
  templateUrl: './data-info.component.html',
  styleUrls: ['./data-info.component.css']
})
export class DataInfoComponent implements OnInit {

  @Input() group: any;

  tempMin!: number;
  tempAvg!: number;
  tempMax!: number;
  tempStart!: number;
  tempEnd!: number;
  humMin!: number;
  humAvg!: number;
  humMax!: number;
  humStart!: number;
  humEnd!: number;

  constructor() { }

  ngOnInit(): void {
    this.calculateData();
  }

  calculateData() {
    let temperatures: number[] = this.group.items.map((item: { temperature: any; }) => item.temperature);
    let humidities: number[] = this.group.items.map((item: { humidity: any; }) => item.humidity);
    this.tempMax = max(temperatures).toFixed(1)
    this.tempAvg = mean(temperatures).toFixed(1)
    this.tempMin = min(temperatures).toFixed(1)
    this.tempStart = temperatures[0];
    this.tempEnd = temperatures[temperatures.length - 1]
    this.humMax = max(humidities).toFixed(1)
    this.humAvg = mean(humidities).toFixed(1)
    this.humMin = min(humidities).toFixed(1)
    this.humStart = humidities[0];
    this.humEnd = humidities[humidities.length - 1]
  }

}
