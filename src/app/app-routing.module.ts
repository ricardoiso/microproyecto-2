import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SeeDetailsComponent } from './components/see-details/see-details.component';
import { AdminComponent } from './components/admin/admin.component';
import { BuyComponent} from './components/buy/buy.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'see-details/:id', component: SeeDetailsComponent},
  {path: 'buy/:id', component: BuyComponent},
  {path: 'admin', component: AdminComponent},
  {path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
