import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgIf } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { Toolbar } from '../../km/shared/toolbar/toolbar';
import { LoginService } from '../../../services/login/login-service';

@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    NgIf,
    MatToolbarModule,
    RouterLink,
    RouterLinkActive,
    Toolbar
  ],
  templateUrl: './login.html',
  standalone: true,
  styleUrl: './login.css'
})
export class Login {
  loginForm: FormGroup;

  constructor(private readonly fb: FormBuilder, private readonly router: Router, private loginService: LoginService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.loginService.login(email, password).subscribe({
        next: (response) => {
          console.log('JWT received:', response.token);
          localStorage.setItem('token', response.token);
          this.router.navigate(['/home']);
        },
        error: (err) => {
          console.error('Login error:', err);
        }
      });
    }
  }

}
