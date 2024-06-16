import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface User {
  email: string;
  password: string;
}


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  user: User={
    email:'',
    password:''
  }

  allusers: User[] = [];

  constructor(private router : Router) {
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {

      this.allusers = JSON.parse(storedUsers);
    }
    else {
      this.allusers = []; // Initialize allusers as an empty array if no users are found in localStorage
    }
    console.log(storedUsers);
    console.log(this.allusers);
  }
  register(){
    if (!Array.isArray(this.allusers)) {
      this.allusers = [];
    }
    console.log(this.user);
    this.allusers.push(this.user);
    console.log(this.allusers);
    localStorage.setItem('users', JSON.stringify(this.allusers));

    this.router.navigate(['/login'])
  }
}
