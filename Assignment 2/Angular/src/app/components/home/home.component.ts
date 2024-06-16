import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  islogin: any  = '';

  constructor(private router: Router) { };

  ngOnInit(): void { 
    this.islogin = localStorage.getItem('isLoggedIn');
    console.log(this.islogin);

    if(this.islogin !==  'true'){
      alert('redirecting to login page');
      this.router.navigate(['/login'])
    }
  }
}
