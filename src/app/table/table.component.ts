import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';
import { UserInfo } from '../models/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  standalone: false,
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnInit {

  TableData:any[] = [];
headers: string[] = [];
  editRow: number | null = null;
    currentPage: number = 1;
  itemsPerPage: number = 10;
  constructor(private http:HttpClient, private commonService:CommonService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.commonService.getJsonData([]).subscribe((data)=>{
     this.TableData = data;
      if (data.length > 0) {
        this.headers = Object.keys(data[0]);
      }
    })
  }

    enableEdit(index: number) {
    this.editRow = index;
  }

  saveEdit() {
    this.editRow = null;
  }

  goToDetails(row: any) {
    this.router.navigate(['/details', row.id], { state: { row } });
  }

    get paginatedData() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.TableData.slice(start, start + this.itemsPerPage);
  }

  totalPages(): number {
    return Math.ceil(this.TableData.length / this.itemsPerPage);
  }
   changePage(page: number) {
    if (page >= 1 && page <= this.totalPages()) {
      this.currentPage = page;
    }
  }

}
