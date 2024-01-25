import { Component, NgModule, Output } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { User } from '../class/user';
import { ServiceService } from '../service.ts/service.service';
import { error } from 'console';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatToolbarModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  // user: User[] = [{
  //   key: "user",
  //   email: "gabriele.valentino@gmail.com",
  //   password: "Gabriele"
  // },
  // {
  //   key: "admin",
  //   email: "gabriele.valentino@liparipeople.com",
  //   password: "Admin"
  // }]

  constructor(private router: Router, private service: ServiceService) {
  }

  user: User = new User();
  login() {
    const email = document.getElementById(
      'email',
    ) as HTMLInputElement | null;
    const password = document.getElementById(
      'password',
    ) as HTMLInputElement | null;
    
    this.user.usernameOrEmail = email?.value;
    this.user.password = password?.value;

    console.log(this.user)
    

    this.service.login(this.user).subscribe((res)=> {
       this.router.navigate(['Homepage']);
    },(error)=> {console.log(error)
      localStorage.setItem("error", JSON.stringify(error))
    }
    );

    // this.user.forEach((res) => {
    //   if (res.key == "admin") {
    //     if (email?.value == res.usernameOrEmail && password?.value == res.password) {
    //       localStorage.setItem("login", "true");
    //       localStorage.setItem("admin", "true");
    //       this.service.isAdmin = true;
    //       this.service.isLogged = true;
    //       this.router.navigate(['Homepage']);
    //       alert("sei loggato come admin!");
    //     } 
    //   }else{
    //     if (email?.value == res.email && password?.value == res.password) {
    //       localStorage.setItem("login", "true");
    //       localStorage.setItem("admin", "false");
    //       this.service.isLogged = true;
    //       this.service.isAdmin = false;
    //       this.router.navigate(['Homepage']);
    //     } 
    //   }
    // })
}

  home() {
    this.router.navigate(['Homepage'])
  }
}

