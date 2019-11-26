import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { EmployeeService } from '../Service/employee.service';
import { Observable} from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css'],
  providers: [EmployeeService]
})
export class UpdateEmployeeComponent  {

  public employeeId; 
  // our angular form
  update_employee_form: FormGroup;

  constructor(
      private employeeService: EmployeeService,      
      private formBuilder: FormBuilder,
      private router : Router,
      private route: ActivatedRoute
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

  updateEmployee(){

    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.employeeId = id;
      this.employeeService.updateEmployee(this.employeeId, this.update_employee_form.value)
      .subscribe(response => {
        response.json();
                console.log(response);
                  this.readEmployees();
               },
               error => console.log(error)
           );
  }

  readEmployees(){
    this.router.navigate(['/reademployees']);
}

ngOnInit(){
  // this.categoryService.readCategories()
  //     .subscribe(categories => this.categories=categories['records']);
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
//        
}