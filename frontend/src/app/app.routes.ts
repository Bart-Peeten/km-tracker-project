import { Routes } from '@angular/router';
import { Login } from './components/auth/login/login';
import { Register } from './components/auth/register/register';
import { Home } from './components/home/home/home';
import { Admin } from './components/admin/admin/admin';

export const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'home', component: Home },
  { path: 'admin', component: Admin },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];
