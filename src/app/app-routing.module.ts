import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminUserComponent } from './admin-user/admin-user.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './admin/components/login/login.component';
import { RegisteredUserComponent } from './registered-user/registered-user.component';
import { HomeComponent } from './userComponents/home-component/home-component.component';
import { PageNotFoundComponent } from './userComponents/page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'',component:HomeComponent},

  {path:'admin',component:AdminComponent,children:[
    {path:'login',component:LoginComponent}
  ]},

  {path:'adminUser',component:AdminUserComponent,children:[

  ]},

  {path:'registeredUser',component:RegisteredUserComponent,children:[

  ]},

  { path: '',   redirectTo: '', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
