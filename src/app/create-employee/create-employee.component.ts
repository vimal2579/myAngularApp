import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { EmployeeService } from '../Service/employee.service';
//import { CategoryService } from '../category.service';
import { Observable} from 'rxjs';
import { Employee } from '../employee';
//import { Category } from '../category';
@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent { 
  // our angular form
  create_employee_form: FormGroup;
  // @Output will tell the parent component (AppComponent) that an event happened in this component
  @Output() show_read_employees_event = new EventEmitter();
  // list of categories  
  constructor(
      private employeeService: EmployeeService,
      //private categoryService: CategoryService,
      formBuilder: FormBuilder
  ){
      // based on our html form, build our angular form
      this.create_employee_form = formBuilder.group({
          name: ["", Validators.required],
          dob: ["", Validators.required],
          company: ["", Validators.required],
          experience: ["", Validators.required],
          noticePeriod: ["", Validators.required],
          primarySkill: ["", Validators.required],
          employmentType: ["", Validators.required],
          CTC: ["", Validators.required]          
      });
  }
  // user clicks 'create' button
  createEmployee(){     
      this.employeeService.createEmployee(this.create_employee_form.value)
          .subscribe(
               employee => {                  
                  console.log(employee);
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

  // what to do when this component were initialized
//   ngOnInit(){
//       // read categories from database
//       this.categoryService.readCategories()
//           .subscribe(categories => this.categories=categories['records']);
//   }
}
