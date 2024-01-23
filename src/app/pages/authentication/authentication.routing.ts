import { Routes } from '@angular/router';

import { AppSideLoginComponent } from './login/login.component';
import { AppSideRegisterComponent } from './register/register.component'; 
import { DemoSpringBootComponent } from './demo-spring-boot/demo-spring-boot.component';

export const AuthenticationRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'login',
        component: AppSideLoginComponent,
      },
      {
        path: 'register',
        component: AppSideRegisterComponent,
      }, 
      {
        path: 'demo-spring-boot',
        component: DemoSpringBootComponent,
      }, 
    ],
  },
];
