import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EmployeeService } from '../Service/employee.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable} from 'rxjs';
import { Employee } from '../employee';
 
@Component({
    selector: 'app-read-employees',
    templateUrl: './read-employees.component.html',
    styleUrls: ['./read-employees.component.css'],
    providers: [EmployeeService]
})
 
export class ReadEmployeesComponent implements OnInit {
    /*
     Needed to notify the 'consumer of this component', which is the 'AppComponent',
      that an 'event' happened in this component.
    */
    @Output() show_create_employee_event=new EventEmitter();
    @Output() show_read_one_employee_event=new EventEmitter();
    @Output() show_update_employee_event=new EventEmitter();
    @Output() show_delete_employee_event=new EventEmitter();
 
    // store list of products
    employees : Employee[];
 
    // initialize productService to retrieve list products in the ngOnInit()
    constructor(private _employeeService: EmployeeService){}
 
    // methods that we will use later
    createEmployee()
    {
        // tell the parent component (AppComponent)
        this.show_create_employee_event.emit({
        title: "Create Employee"
        });
    }
    
   // when user clicks the 'read' button
readOneEmployee(id){
    console.log('rp comp readOneEmployee');
    // tell the parent component (AppComponent)
    this.show_read_one_employee_event.emit({
        empreg_id: id,
        title: "Read One Employee"
    });
}

    // when user clicks the 'update' button
updateEmployee(id){
    // tell the parent component (AppComponent)
    this.show_update_employee_event.emit({
        empreg_id: id,
        title: "Update Employee"
    });
}
    // when user clicks the 'delete' button
deleteEmployee(id){
    // tell the parent component (AppComponent)
    this.show_delete_employee_event.emit({
        empreg_id: id,
        title: "Delete Employee"
    });
}
 
    // Read products from API.
    ngOnInit(){
        this._employeeService.readEmployees()
        .subscribe(response =>
        this.employees=response.json());            
    }
}