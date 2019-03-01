import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
 
import { AppComponent } from './app.component';
import { ReadEmployeesComponent } from './read-employees/read-employees.component';
import { EmployeeService } from './Service/employee.service';
import { AccountService } from './Service/account.service';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { ReadOneEmployeeComponent } from './read-one-employee/read-one-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { LoginComponent } from './login/login.component';
import { routing } from './/Routing/app-routing.module';
 
@NgModule({
  declarations: [
    AppComponent,
    ReadEmployeesComponent,
    CreateEmployeeComponent,
    ReadOneEmployeeComponent,
    UpdateEmployeeComponent,
    DeleteEmployeeComponent,
    LoginComponent  
    //CreateProductComponent
  ],
  imports: [
    BrowserModule, HttpModule, FormsModule, ReactiveFormsModule, routing 
  ],
  providers: [
    EmployeeService,
    AccountService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }