import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AppComponent } from './app.component';
import { EmployeeService } from './Service/employee.service';
import { AccountService } from './Service/account.service';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule, routingComponents } from './/Routing/app-routing.module';
 
@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    LoginComponent
  ],
  imports: [
    BrowserModule, HttpModule, FormsModule, ReactiveFormsModule, AppRoutingModule 
  ],
  providers: [
    EmployeeService,
    AccountService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }