import { Component } from '@angular/core';
import { Router } from '@angular/router'

// user.model.ts

export interface User {
  email: string;
  password: string;
}

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent {
  loginForm: User = {
    email: '',
    password: ''
  };

  users: User[] = [];

  constructor(private router: Router) {
    // Retrieve users from localStorage on component initialization
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      this.users = JSON.parse(storedUsers);
    }
  }

  login(): void {
    const { email, password } = this.loginForm;

    // Find user matching the entered email and password
    const loggedInUser = this.users.find(user => user.email === email && user.password === password);

    if (loggedInUser) {
      // User found, set isLoggedIn flag and navigate to home/dashboard
      localStorage.setItem('isLoggedIn', 'true');
      this.router.navigate(['/']); // Navigate to home or dashboard route
    } else {
      // User not found, display error message (e.g., using Angular Material)
      console.log('Invalid credentials. Please try again.');
      // Handle error message display (e.g., using MatSnackBar from Angular Material)
      // Example: this.snackBar.open('Invalid credentials. Please try again.', 'Close', { duration: 3000 });
      localStorage.setItem('isLoggedIn', 'false');
    }
  }

  register(): void {
    this.router.navigate(['/signup']); // Navigate to signup route
  }
}
