import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  username:string;
  password:string;
  errorMessage:string;


 

  constructor(private router: Router){
   this.username='';
   this.password='';
   this.errorMessage='';
  }
  login(): void {
    if (this.isValidCredentials()) {
      if (this.username === 'admin') {
        this.router.navigate(['/menu']);
      } else if (this.username === 'rh') {
        this.router.navigate(['/menurh']);
      }
    } else {
      this.errorMessage = 'Invalid username or password';
    }
  }

  isValidCredentials(): boolean {
    // Add your validation logic here
    //return this.username === 'admin' && this.password === 'password';
    if ((this.username === 'admin' || this.username === 'rh') && this.password === 'password') {
      return true;
    } else {
      return false;
    }
  }

  
    };



  


