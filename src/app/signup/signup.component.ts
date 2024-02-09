import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { NewUser } from '../class/newUser';
import { ServiceService } from '../service.ts/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MatFormFieldModule, MatSelectModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  form!: FormGroup
  listaRuoli: string[] = ['admin', 'user'];
  constructor(private fb: FormBuilder, private service: ServiceService, private router: Router) {
    this.form = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      ruolo: ['',Validators.required]
    });
  }

  registra(){
   let newUser = new NewUser();

   newUser.username = this.form.value.username;
   newUser.email = this.form.value.email;
   newUser.password = this.form.value.password;

   newUser.role[0] = this.form.value.ruolo;
  
   if(newUser){
     this.service.registrazione(JSON.stringify(newUser)).subscribe((res)=>{
      if(this.form.value.ruolo == "admin"){
        alert("ti sei registrato correttamente come admin");
      }else{
        alert("ti sei registrato correttamente come user");
      }
      this.router.navigate(['Homepage']);
     },()=>{
      alert("error");
     });
   }
  }
}
