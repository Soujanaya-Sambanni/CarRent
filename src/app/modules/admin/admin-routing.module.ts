import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { ForYouComponent } from './components/for-you/for-you.component';
import { GetCarComponent } from './components/get-car/get-car.component';
import { PolicyComponent } from './components/policy/policy.component';
import { ListComponent } from './components/list/list.component';
import { BooknowComponent } from './components/booknow/booknow.component';
import { PageNotFoundComponent } from 'src/app/components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    component: AdminDashboardComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      { path: 'home', component: HomeComponent },
      { path: 'for-you', component: ForYouComponent },
      { path: 'get-car', component: GetCarComponent },
      {path:'booknow',component:BooknowComponent},
       {path:'list/:car',component:ListComponent},
      { path: 'policy', component: PolicyComponent },
    //  {path:'booknow',component:BooknowComponent},
    //   {path:'list/:car',component:ListComponent},
      // { path: '', redirectTo: '/admin/home', pathMatch: 'full' },
      {path:'**', component:PageNotFoundComponent}
    ],
  },
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
