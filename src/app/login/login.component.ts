import { Component, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
 @Output() isLogin: boolean = false;
 constructor(private router: Router){
 }

 login(){
   this.router.navigate(['Homepage'])
 }
}

