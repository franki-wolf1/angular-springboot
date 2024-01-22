import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
 

import { ExtraRoutes } from './extra.routing';
import { AppIconsComponent } from './icons/icons.component';
import { AppSamplePageComponent } from './sample-page/sample-page.component';
import { MaterialModule } from '../../material.module';
import { IconsModule } from '../../icons.module';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ExtraRoutes), 
    FormsModule,
    ReactiveFormsModule, 
    MaterialModule,
    IconsModule,
  ],
  declarations: [
    AppIconsComponent,
    AppSamplePageComponent
  ],
})
export class ExtraModule {}
