import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'admin',
  canActivate: [authGuard],
    loadChildren: () => import('./modules/admin/admin.module').then((m) => m.AdminModule)},
  // {
  //   path:'admin', loadChildren: () => import ('./modules/admin/admin.module').then((m) => m.AdminModule)
  // },
 
  {path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
