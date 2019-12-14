import { Component, Input, Output, EventEmitter } from '@angular/core';
import { EmployeeService } from '../Service/employee.service';
import { Router, ActivatedRoute } from '@angular/router';
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
  //@Input() empreg_id;
  public employeeId;
  constructor(private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router){}
  
  deleteEmployee(){
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.employeeId = id;
      this.employeeService.deleteEmployee(this.employeeId)
          .subscribe(response => {
                      response.json();

                  this.readEmployees();
               },
               error => console.log(error)
           );
  }

  readEmployees(){
    this.router.navigate(['/reademployees']);
  }

}
