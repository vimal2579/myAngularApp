import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { EmployeeService } from '../Service/employee.service';
import { Observable} from 'rxjs';
import { Employee } from '../employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent { 
  // our angular form
  create_employee_form: FormGroup;
  
  constructor(
      private employeeService: EmployeeService,
      private router: Router,
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

  createEmployee(){     
      this.employeeService.createEmployee(this.create_employee_form.value)
          .subscribe(
               employee => {                  
                  console.log(employee);
                  this.readEmployees();
               },
               error => console.log(error)
           );
  }

  // user clicks the 'Read Employees' button
  readEmployees(){
      this.router.navigate(['/reademployees']);
  }

  // what to do when this component were initialized
//   ngOnInit(){
//       // read categories from database
//       this.categoryService.readCategories()
//           .subscribe(categories => this.categories=categories['records']);
//   }
}
