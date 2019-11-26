import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { EmployeeService } from '../Service/employee.service';
import { Observable} from 'rxjs';
import { Employee } from '../employee';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-read-one-employee',
  templateUrl: './read-one-employee.component.html',
  styleUrls: ['./read-one-employee.component.css'],
  providers: [EmployeeService]
})
export class ReadOneEmployeeComponent implements OnInit {
 
// @Input means it will accept value from parent component (AppComponent)
//@Input() empreg_id;

public employeeId;
employee: Employee;

constructor(private employeeService: EmployeeService,
private route : ActivatedRoute,
private router: Router){}

   // user clicks the 'Read Employees' button
   readEmployees(){
    this.router.navigate(['/reademployees']);
   }

   ngOnInit() {
     let id = parseInt(this.route.snapshot.paramMap.get('id'));
     this.employeeId = id;
     this.employeeService.readOneEmployee(this.employeeId)
           .subscribe(response =>
            this.employee=response.json()); 
   }
}
