// Vendors
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

// Guards
import { TutorialGuard } from 'src/app/shared/guards/tutorial.guard';

const routes: Routes = [
  { path: '', redirectTo: 'tutorial', pathMatch: 'full' },
  { path: 'tutorial', loadChildren: 'src/app/screens/tutorial/tutorial.module#TutorialPageModule' },
  { path: 'auth', loadChildren: 'src/app/screens/auth/auth.module#AuthPageModule', canActivate: [TutorialGuard]},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
