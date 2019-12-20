import { NgModule, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DashboardPage } from './dashboard.page';
import { AutoLogoutComponentModule } from 'src/app/components/auto-logout/auto-logout.module';


const routes: Routes = [
  {
    path: '',
    component: DashboardPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AutoLogoutComponentModule,
    RouterModule.forChild(routes)
  ],
  
  declarations: [DashboardPage]
})

export class DashboardPageModule {}
