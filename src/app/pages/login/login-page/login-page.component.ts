import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginButtonComponent } from '../../../shared/components/login-button/login-button.component';

@Component({
  selector: 'app-login-page',
  standalone: true, 
  imports: [
    CommonModule, 
    RouterLink,   
    ReactiveFormsModule, 
    LoginButtonComponent
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent implements OnInit {

  loginForm!: FormGroup;
  errorMessage: string | null = null;

  constructor(
    private fb: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      login: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      this.errorMessage = 'Por favor, preencha os campos corretamente.';
      return;
    }
    this.errorMessage = null;
    console.log('Dados do formulário:', this.loginForm.value);
  }

}