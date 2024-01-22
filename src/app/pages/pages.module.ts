import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PagesRoutes } from './pages.routing.module'; 
import { FormsModule } from '@angular/forms';  
@NgModule({
  imports: [
    CommonModule, 
    FormsModule, 
    RouterModule.forChild(PagesRoutes), 
  ],
  exports: [],
})
export class PagesModule {}
