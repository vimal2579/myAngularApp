import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable} from 'rxjs';
import { catchError } from 'rxjs/operators'
import { map } from 'rxjs/operators';
import { Employee } from '../employee';
 
@Injectable() 
// Service for products data.
export class EmployeeService {
 
    // We need Http to talk to a remote server.
    constructor(private _http : Http){ } 
    // Get list of products from remote server.
    readEmployees()   
    {
        return this._http.get("http://localhost:51789/api/Employee/");            
    }
    
    // Send product data to remote server to create it.
    createEmployee(employee)
    {  
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this._http.post("http://localhost:51789/api/Employee/", JSON.stringify(employee), options);        
    }

    // Get a product details from remote server.
    readOneEmployee(empreg_id)
    {
        return this._http.get("http://localhost:51789/api/Employee?id="+empreg_id);
    }

    // Send product data to remote server to update it.
    updateEmployee(empreg_id,employee)
    { 
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
 
    return this._http.put("http://localhost:51789/api/Employee/?id="+empreg_id+"",JSON.stringify(employee), options);
       
    }

    // Send product ID to remote server to delete it.
deleteEmployee(empreg_id)
{
 
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
 
    return this._http.delete("http://localhost:51789/api/Employee?id="+empreg_id, options);        
    //pipe(map((res: Response) => res.json()));
}
       
}
