import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.css']
})
export class TableDataComponent implements OnInit {

  @Input() items!: any[];

  pageSize: number = 8;
  currentPage: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

  getPagedItems() {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    return this.items.slice(start, end);
  }

}
