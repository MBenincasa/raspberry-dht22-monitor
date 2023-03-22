import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { DriveService } from 'src/app/services/drive.service';

@Component({
  selector: 'app-single-day-monitor-data',
  templateUrl: './single-day-monitor-data.component.html',
  styleUrls: ['./single-day-monitor-data.component.css']
})
export class SingleDayMonitorDataComponent implements OnInit {

  date: any;
  data: any[] = [];

  pageSize: number = 8;
  currentPage: number = 1;

  selectedDate!: NgbDateStruct;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private driveService: DriveService) { }

  ngOnInit(): void {
    this.getDriveData();
  }

  getDriveData(date?: string) {
    const datePipe = new DatePipe('en-US');
    if (!date) {
      this.date = datePipe.transform(new Date(), 'yyyy-MM-dd');
    }

    this.driveService.getAllData(this.date).subscribe(
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
            return { date: datePipe.transform(new Date(group.date), 'dd/MM/yyyy'), items: group.items };
          });
      }
    );
  }

  getPagedItems() {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    return this.data[0].items.slice(start, end);
  }

  onSubmit() {
    console.log("submit")
    this.data = [];
    let year = this.selectedDate.year;
    let month = this.selectedDate.month;
    let day = this.selectedDate.day;
    let date = `${year}-${month.toLocaleString('en-US', {minimumIntegerDigits: 2})}-${day.toLocaleString('en-US', {minimumIntegerDigits: 2})}`
    this.date = date;
    
    this.getDriveData(this.date)
  }

  onClick() {
    this.router.navigate(['/monitor-data']);
  }

}
