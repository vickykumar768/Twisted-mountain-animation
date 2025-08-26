import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-table-view',
  standalone: false,
  templateUrl: './table-view.component.html',
  styleUrl: './table-view.component.css'
})
export class TableViewComponent implements OnInit {
    row: any;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // row passed via state
    this.row = history.state.row;
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
