import { Component, Input, Output, EventEmitter } from '@angular/core';
import { EmployeeService } from '../Service/employee.service';
//import { CategoryService } from '../category.service';
import { Observable} from 'rxjs';
import { Employee } from '../employee';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css'],
  providers: [EmployeeService]
})
export class DeleteEmployeeComponent { 
  /*
      @Output will tell the parent component (AppComponent)
      that an event has happened (via .emit(), see readProducts() method below)
  */
  @Output() show_read_employees_event = new EventEmitter();
  // @Input enable getting the product_id from parent component (AppComponent)
  @Input() empreg_id;
  // initialize product service
  constructor(private employeeService: EmployeeService){}
  // user clicks 'yes' button
  deleteEmployee(empreg_id){
      // delete data from database
      this.employeeService.deleteEmployee(this.empreg_id)
          .subscribe(response => {
                      response.json();

                  // show an alert to tell the user if product was created or not
                  console.log(response);

                  // go back to list of products
                  this.readEmployees();
               },
               error => console.log(error)
           );
  }

  // user clicks the 'read products' button
  readEmployees(){
      this.show_read_employees_event.emit({ title: "Read Employees" });
  }

}
