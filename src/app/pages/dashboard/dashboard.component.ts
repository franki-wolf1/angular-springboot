import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
/*import { TablerIconsModule } from 'angular-tabler-icons';*/ 

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatIconModule, 
    MatCardModule, 
    MatTableModule,
    CommonModule,
  ],
})
export class AppDashboardComponent { 

  stats: any;
  dataSource: any;
  displayedColumns: any;
  productcards: any;
}
