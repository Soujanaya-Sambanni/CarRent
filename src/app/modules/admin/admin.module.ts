import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{FormsModule} from '@angular/forms';
import{ReactiveFormsModule} from'@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ForYouComponent } from './components/for-you/for-you.component';
import { GetCarComponent } from './components/get-car/get-car.component';
import { PolicyComponent } from './components/policy/policy.component';
import { HomeComponent } from './components/home/home.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { ListComponent } from './components/list/list.component';
import { BooknowComponent } from './components/booknow/booknow.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ForYouComponent,
    GetCarComponent,
    PolicyComponent,
    HomeComponent,
    AdminDashboardComponent,
    ListComponent,
    BooknowComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
