import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../shared/services/auth.service';
import { Users } from '../../../shared/interfaces/users.interface';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private fb: FormBuilder, private router: Router, private auth: AuthService){};
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });
  onSubmit(){
    if(this.loginForm.invalid){
      this.loginForm.markAllAsTouched()
    }else{
      const data: Users = this.loginForm.value as Users
      this.auth.login(data).subscribe({
        next: () => {
          this.router.navigate(['/home']);
        },
        error: (error) => {
          console.error(error)
        }
      })
    }
  }
  text2: string = 'password';
  show: boolean = false;
  toggle(): void{
    this.show = !this.show;
    if(this.show === true){
      this.text2 = 'text';
    }else if(this.show === false){
      this.text2 = 'password';
    };
  };
}
