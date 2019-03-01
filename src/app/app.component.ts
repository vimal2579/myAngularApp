import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // properties for child components
  title="Read Employees";
  empreg_id;

  // show details of a product
showReadOneEmployee($event){
 
  // set title and product ID
  this.title=$event.title;
  this.empreg_id=$event.empreg_id;

  // hide all html then show only one html
  this.hideAll_Html();
  this.show_read_one_employee_html=true;
}

  // properties used to identify what views to show
  show_read_employees_html=true;
  show_create_employee_html=false;
  show_read_one_employee_html=false;
  show_update_employee_html=false;
  show_delete_employee_html=false;

// show the 'create product form'
showCreateEmployee($event){
 
  // set title
  this.title=$event.title;

  // hide all html then show only one html
  this.hideAll_Html();
  this.show_create_employee_html=true;
}

// show products list
showReadEmployees($event){
  // set title
  this.title=$event.title;

  // hide all html then show only one html
  this.hideAll_Html();
  this.show_read_employees_html=true;
}

// show the 'update product form'
showUpdateEmployee($event){
 
  // set title and product ID
  this.title=$event.title;
  this.empreg_id=$event.empreg_id;

  // hide all html then show only one html
  this.hideAll_Html();
  this.show_update_employee_html=true;
}

// show 'are you sure?' prompt to confirm deletion of a record
showDeleteEmployee($event){
 
  // set title and product ID
  this.title=$event.title;
  this.empreg_id=$event.empreg_id;

  // hide all html then show only one html
  this.hideAll_Html();
  this.show_delete_employee_html=true;
}

// hide all html views
hideAll_Html(){
  this.show_read_employees_html=false;
  this.show_read_one_employee_html=false;
  this.show_create_employee_html=false;
  this.show_update_employee_html=false;
  this.show_delete_employee_html=false;
}
}
