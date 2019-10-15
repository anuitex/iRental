// Vendors
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

// Pages
import { AuthPage } from 'src/app/screens/auth/auth.page';
// Routing
import { AuthPageRoutingModule } from 'src/app/screens/auth/auth-router.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuthPageRoutingModule,
  ],
  declarations: [AuthPage]
})
export class AuthPageModule {}
