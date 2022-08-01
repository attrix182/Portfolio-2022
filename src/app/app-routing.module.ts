import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', loadChildren: () => import('./public/home/home.module').then(m => m.HomeModule) },
  { path: 'admin', loadChildren: () => import('./private/admin/admin.module').then(m => m.AdminModule), canActivate: [AuthGuard] },
  { path: 'login', loadChildren: () => import('./public/login/login.module').then(m => m.LoginModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
