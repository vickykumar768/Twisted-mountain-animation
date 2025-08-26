import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './table/table.component';
import { TableViewComponent } from './table-view/table-view.component';

const routes: Routes = [
    { path: '', component: TableComponent },
  { path: 'details/:id', component: TableViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
