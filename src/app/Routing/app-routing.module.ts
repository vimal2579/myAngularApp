import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { ReadEmployeesComponent } from '../read-employees/read-employees.component';
import { AuthguardService }  from '../Service/authguard.service';
import { CreateEmployeeComponent } from '../create-employee/create-employee.component';
import { ReadOneEmployeeComponent } from '../read-one-employee/read-one-employee.component';
import { UpdateEmployeeComponent } from '../update-employee/update-employee.component';
import { DeleteEmployeeComponent } from '../delete-employee/delete-employee.component';
 
const routes: Routes = [
   {path: '', redirectTo: '/reademployees', pathMatch: 'full'},
   {path: 'reademployees', component: ReadEmployeesComponent},
   {path: 'createemployee', component: CreateEmployeeComponent},
   {path: 'readoneemployee/:id', component: ReadOneEmployeeComponent},
   {path: 'editemployee/:id', component: UpdateEmployeeComponent},
   {path: 'deleteemployee/:id', component: DeleteEmployeeComponent}
];
 
//export const routing = RouterModule.forRoot(routes);
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [ReadEmployeesComponent,ReadOneEmployeeComponent,CreateEmployeeComponent,UpdateEmployeeComponent,DeleteEmployeeComponent]
