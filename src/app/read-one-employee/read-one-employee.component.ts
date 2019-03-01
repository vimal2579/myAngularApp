import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { EmployeeService } from '../Service/employee.service';
import { Observable} from 'rxjs';
import { Employee } from '../employee';

@Component({
  selector: 'app-read-one-employee',
  templateUrl: './read-one-employee.component.html',
  styleUrls: ['./read-one-employee.component.css'],
  providers: [EmployeeService]
})
export class ReadOneEmployeeComponent implements OnChanges {

  /*
        @Output will tell the parent component (AppComponent)
        that an event has happened (via .emit(), see readProducts() method below)
    */
   @Output() show_read_employees_event = new EventEmitter();
 
   // @Input means it will accept value from parent component (AppComponent)
   @Input() empreg_id;

   employee: Employee;

   // initialize product service
   constructor(private employeeService: EmployeeService){}

   // user clicks the 'read products' button
   readEmployees(){
       this.show_read_employees_event.emit({ title: "Read Employees" });
   }
  
   // call the record when 'product_id' was changed
   ngOnChanges(){
       this.employeeService.readOneEmployee(this.empreg_id)
           .subscribe(response =>
            this.employee=response.json());  
            
   }

}
