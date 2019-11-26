import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EmployeeService } from '../Service/employee.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable} from 'rxjs';
import { Employee } from '../employee';
import { Router } from '@angular/router';
 
@Component({
    selector: 'app-read-employees',
    templateUrl: './read-employees.component.html',
    styleUrls: ['./read-employees.component.css'],
    providers: [EmployeeService]
})
 
export class ReadEmployeesComponent implements OnInit {
 
    // store list of employees
    employees : Employee[];
 
    constructor(private _employeeService: EmployeeService,
    private router : Router){}
    
   // when user clicks the 'Read' button
readOneEmployee(id){
    this.router.navigate(['/readoneemployee', id]);
    };
    
    // when user clicks the 'Edit' button
updateEmployee(id){
    this.router.navigate(['/editemployee', id]);
};
    // when user clicks the 'Delete' button
deleteEmployee(id){
    this.router.navigate(['/deleteemployee', id]);
}
 
    // Read Employees from API.
    ngOnInit(){
        this._employeeService.readEmployees()
        .subscribe(response =>
        this.employees=response.json());            
    }
}