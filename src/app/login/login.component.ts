import { Component, Output } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatToolbarModule],
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

 home(){
  this.router.navigate(['Homepage'])
 }
}

