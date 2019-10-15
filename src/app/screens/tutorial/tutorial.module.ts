// Vendors
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Storage } from '@ionic/storage';

// Pages
import { TutorialPage } from 'src/app/screens/tutorial/tutorial.page';

const routes: Routes = [
  {
    path: '',
    component: TutorialPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TutorialPage]
})
export class TutorialPageModule {}
