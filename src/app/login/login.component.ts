import { Component, OnInit,ElementRef,ViewChild } from '@angular/core';
import { Router,  NavigationExtras,ActivatedRoute } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../Service/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AccountService]
})
 
export class LoginComponent implements OnInit {
  @ViewChild('username') el:ElementRef;
  statuslogin:any;
  focusin: boolean = true;
  rForm: FormGroup;
  post:any;  
  usernameAlert:string="Please fill username";
  passwordAlert:string="Please fill password";
  loginAlert:string;
  loginError:boolean=false;
  returnUrl: string;
  constructor(
       private route: ActivatedRoute,
      private fb: FormBuilder,
      private authenticationservice:AccountService,    
      public router: Router
    ) {
    this.rForm = fb.group({
      'username' : [null, Validators.required],
      'password' : [null, Validators.required],
    });
  }
  ngOnInit() {
   this.authenticationservice.logout();
   this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/index';
}

 addPost(post) {
  this.authenticationservice.login(post).subscribe(
     res => {
       if(res.status == true)
         {
            this.router.navigate([this.returnUrl]);
         }else{
           this.loginError = true
           this.loginAlert = res.message;
         }
     },
      err => {
       return err;
         
     }
   );

 }

}
