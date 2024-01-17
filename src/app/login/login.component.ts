import { Component, NgModule, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { User } from '../class/user';
import { ServiceService } from '../service.ts/service.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatToolbarModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
 user: User = {
  email : "gabriele.valentino@gmail.com",
  password : "Gabriele"
 }

 constructor(private router: Router, private service: ServiceService){
 }

 login(){
   const email = document.getElementById(
    'email',
  ) as HTMLInputElement | null;
  const password = document.getElementById(
    'password',
  ) as HTMLInputElement | null;

  if(email?.value == this.user.email && password?.value == this.user.password){
    localStorage.setItem("login", "true");
    this.service.isLogged = true;
    this.router.navigate(['Homepage']);
  }else{
    alert("credenziali errate");
  }
 }

 home(){
  this.router.navigate(['Homepage'])
 }
}

