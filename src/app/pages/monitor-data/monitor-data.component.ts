import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { DriveService } from 'src/app/services/drive.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-monitor-data',
  templateUrl: './monitor-data.component.html',
  styleUrls: ['./monitor-data.component.css']
})
export class MonitorDataComponent implements OnInit {

  data: any[] = [];
  activePanel: string = 'panel-0';
  pageSize: number = 8;
  currentPage: number = 1;

  constructor(private router: Router, private driveService: DriveService) { }

  ngOnInit(): void {
    this.getDriveData();
  }

  getDriveData() {
    const datePipe = new DatePipe('en-US');
    this.driveService.getAllData().subscribe(
      data => {
        this.data = data?.data;
        this.data = this.data.reduce((acc: { date: any; items: any[]; }[], curr: { date: any; }) => {
          const date = curr.date;
          const index = acc.findIndex(group => group.date === date);
          if (index !== -1) {
            acc[index].items.push(curr);
          } else {
            acc.push({ date: date, items: [curr] });
          }
          return acc;
        }, []);

        this.data = this.data
          .map(group => {
            return { date: new Date(group.date), items: group.items };
          })
          .sort((a, b) => b.date.getTime() - a.date.getTime())
          .map(group => {
            return { date: datePipe.transform(group.date, 'dd/MM/yyyy'), items: group.items };
          });
      });
  }

  getPagedItems(i: number) {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    return this.data[i].items.slice(start, end);
  }

  onClick() {
    this.router.navigate(['/single-day-monitor-data']);
  }
}
