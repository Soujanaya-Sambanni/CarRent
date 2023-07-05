import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { ForYouComponent } from './components/for-you/for-you.component';
import { GetCarComponent } from './components/get-car/get-car.component';
import { PolicyComponent } from './components/policy/policy.component';
import { ListComponent } from './components/list/list.component';
import { BooknowComponent } from './components/booknow/booknow.component';

const routes: Routes = [
  {
    path: '',
    component: AdminDashboardComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'for-you', component: ForYouComponent },
      { path: 'get-car', component: GetCarComponent },
      {path:'booknow',component:BooknowComponent},
       {path:'list/:car',component:ListComponent},
      { path: 'policy', component: PolicyComponent },
      { path: '', redirectTo: '/admin/home', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
