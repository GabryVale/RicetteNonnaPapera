import { Component, NgModule, Output } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { User } from '../class/user';
import { ServiceService } from '../service.ts/service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatToolbarModule, FormsModule, ReactiveFormsModule],
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

  form!: FormGroup;
  token: any;
  roles: string[]=[]

  constructor(private router: Router, private service: ServiceService, private fb:FormBuilder) {
    this.form = this.fb.group({
      email: ['',Validators.required],
      password: ['',Validators.required]
  });
  }

user: User = {
  username: "",
  password: ""
}
  login() {
    // const email = document.getElementById(
    //   'email',
    // ) as HTMLInputElement | null;
    // const password = document.getElementById(
    //   'password',
    // ) as HTMLInputElement | null;
    
    // this.user.usernameOrEmail = email?.value;
    // this.user.password = password?.value;
    this.user.username = this.form.value.email;
    this.user.password = this.form.value.password;
    
   if(this.user){
    this.service.login(JSON.stringify(this.user)).subscribe((res)=> {
      this.token = res
      localStorage.setItem("user",JSON.stringify(this.token));
      localStorage.setItem("JwtAccess-Token",JSON.stringify(this.token.accessToken));
      this.service.isLogged = true;
      this.roles = this.token.roles;
      this.roles.forEach((res)=>{
        if(res == "ROLE_ADMIN" || res == "admin"){
          this.service.isAdmin = true;
        }
        else{
          this.service.isAdmin = false;
        } 
      })
      if(this.service.isAdmin){
        alert("ti sei loggato come admin!");
      }else{
        alert("ti sei loggato come user!");
      }
      this.router.navigate(['Homepage']);
    },()=> {
         alert("credenziali errate!");
       });
   }
    
    // (error)=> {console.log(error)
    //   localStorage.setItem("error", JSON.stringify(error))
    // }
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

