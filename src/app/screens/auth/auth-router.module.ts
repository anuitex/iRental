// Vendors
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Pages
import { AuthPage } from 'src/app/screens/auth/auth.page';

const routes: Routes = [
  {
    path: '',
    component: AuthPage,
    children: [
        {
            path: 'regist',
            children: [
              {
                path: '',
                loadChildren: 'src/app/screens/auth/regist/regist.module#RegistPageModule'
              }
            ]
        },
          {
            path: 'login',
            children: [
              {
                path: '',
                loadChildren: 'src/app/screens/auth/login/login.module#LoginPageModule'
              }
            ],
        },
        {
            path: '',
            redirectTo: '/auth/login',
            pathMatch: 'full'
        }
    ]
  },
  {
    path: '',
    redirectTo: '/auth/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AuthPageRoutingModule {}
