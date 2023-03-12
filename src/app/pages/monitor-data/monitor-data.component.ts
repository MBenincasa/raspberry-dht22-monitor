import { Component, OnInit } from '@angular/core';
import { DriveService } from 'src/app/services/drive.service';

@Component({
  selector: 'app-monitor-data',
  templateUrl: './monitor-data.component.html',
  styleUrls: ['./monitor-data.component.css']
})
export class MonitorDataComponent implements OnInit {

  data: any[] = [];

  constructor(private driveService: DriveService) { }

  ngOnInit(): void {
    this.getDriveData();
  }

  getDriveData() {
    this.driveService.getAllData().subscribe(
      data => {
        this.data = data?.data.reverse();
      });
  }

}
