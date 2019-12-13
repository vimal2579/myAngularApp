import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle = 'Employees Application Overview';
  imgUrl = "https://cdn-payscale.com/content/data-packages/employee-engagement/dist/img/introduction.svg";
  isDisabled: boolean = true;
}
