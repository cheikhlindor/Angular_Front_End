import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGardService } from './services/auth-gard.service';
import { SortieAddComponent } from './sortie-add/sortie-add.component';
import { SortieDetailComponent } from './sortie-detail/sortie-detail.component';
import { SortieComponent } from './sortie/sortie.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  {path: 'accueil', component: SortieComponent},
  {path: 'detail-user', component: UserDetailComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent,canActivate: [AuthGardService]},
  {path: 'inscription', component: UserComponent},
  {path: 'user', canActivate: [AuthGardService], component: UserComponent},
  {
    path: 'sortie-add',
    component: SortieAddComponent,
    data: { title: 'Sortie Add' }
  },
  {
    path: 'sortie-details/:id',
    component: SortieDetailComponent,canActivate: [AuthGardService]
  },
  {
    path: 'sortie-edit/:id',
    component: SortieAddComponent,
    data: { title: 'Sortie Edit' },canActivate: [AuthGardService]
  },
  {
    path: '',
    redirectTo: '/accueil',
    pathMatch: 'full'
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
