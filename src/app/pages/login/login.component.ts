import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  loginObj: any = {
    "EmailId": "",
    "Password": ""
  };
  constructor(private http: HttpClient, private router: Router){}

  onLogin() {
    debugger;
    this.http.post('https://freeapi.miniprojectideas.com/api/User/Login', this.loginObj).subscribe((res:any)=>{
      if(res.result) {
        alert('login Success');
        localStorage.setItem('loginTOken', res.data.token);
        this.router.navigateByUrl('/dashboard'); 
      } else {
        alert(res.message);
      }
    })
  }


}

