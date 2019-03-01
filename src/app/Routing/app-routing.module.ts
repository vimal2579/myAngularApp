import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
//import { ListitemComponent } from './item/listitem/listitem.component';
import { LoginComponent } from '../login/login.component';
import { ReadEmployeesComponent } from '../read-employees/read-employees.component';
import { AuthguardService }  from '../Service/authguard.service';
 
const appRoutes: Routes = [
   
    /*{ path: 'login', component: LoginComponent },
    { path: 'index', component: ReadEmployeesComponent,canActivate: [AuthguardService],
    children: [
        { path: '', redirectTo: 'login', pathMatch: 'full' },
        //{ path: 'listitem', component: ListitemComponent,canActivate: [AuthguardService] },
      ] },
 
    // otherwise redirect to home
    { path: '**', redirectTo: '/login' }*/
];
 
export const routing = RouterModule.forRoot(appRoutes);
