import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { navItems } from './sidebar-data';
import { NavService } from '../../../mservices/nav.service';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CommonModule } from '@angular/common';
import { MatNavList } from '@angular/material/list';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { AppNavItemComponent } from './nav-item/nav-item.component';
import { BrandingComponent } from './branding.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [
    AppNavItemComponent,
    BrandingComponent,
    NgScrollbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule, 
    MatCardModule, 
    MatTableModule,
    MatSidenavModule, 
    MatNavList,
    CommonModule,
  ],
})
export class SidebarComponent implements OnInit {
  navItems = navItems;

  constructor(public navService: NavService) {}

  ngOnInit(): void {}
}
