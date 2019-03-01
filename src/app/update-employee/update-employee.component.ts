import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { EmployeeService } from '../Service/employee.service';
//import { CategoryService } from '../category.service';
import { Observable} from 'rxjs';
import { Employee } from '../employee';
//import { Category } from '../category';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css'],
  providers: [EmployeeService]
})
export class UpdateEmployeeComponent  {
 
  // our angular form
  update_employee_form: FormGroup;

  @Output() show_read_one_employee_event = new EventEmitter();
  @Output() show_read_employees_event = new EventEmitter();
  @Input() empreg_id;

  //categories: Category[];

  // initialize product & category services
  constructor(
      private employeeService: EmployeeService,      
      private formBuilder: FormBuilder
  ){

      // build angular form
      this.update_employee_form = this.formBuilder.group({
        primarySkill: [],
        experience: ["", Validators.required],
        noticePeriod: ["", Validators.required],
        CTC: ["", Validators.required]
      });
  }

  employee: Employee;

  // user clicks 'create' button
  updateEmployee(){

      // add product_id in the object so it can be updated
      //this.update_employee_form.value.id = this.empreg_id;

      // send data to server
      this.employeeService.updateEmployee(this.empreg_id, this.update_employee_form.value)
      .subscribe(response => {
        response.json();
                console.log(response);
                  // go back to list of products
                  this.readEmployees();
               },
               error => console.log(error)
           );
  }

  readEmployees(){
    this.show_read_employees_event.emit({ title: "Read Employees" });
}

  // user clicks the 'read products' button
  readOneEmployee(empreg_id){
      this.show_read_one_employee_event.emit({ title: "Read Employee" });
  }

  //call the record when 'product_id' was changed
//   ngOnChanges(){

//       // read one product record
//       this.employeeService.readOneEmployee(this.empreg_id)
//           .subscribe(employee => {
//               // put values in the form
//               this.update_employee_form.patchValue({
//                   primarySkill: this.employee.primarySkill,
//                   experience: this.employee.experience,
//                   noticePeriod: this.employee.noticePeriod,
//                   CTC: this.employee.CTC
//               });
//           });
//   }

  // read categories from database
  ngOnInit(){
      // this.categoryService.readCategories()
      //     .subscribe(categories => this.categories=categories['records']);
  }
}