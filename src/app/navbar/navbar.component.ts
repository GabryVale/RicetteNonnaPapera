import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { ServiceService } from '../service.ts/service.service';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Ricette } from '../class/ricette';


@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule, CommonModule, MatCardModule, FormsModule, ReactiveFormsModule],
})
export class NavbarComponent {
  user: any
  roles: string[]=[];
  form: FormGroup

  ricette: Ricette[] = []
  titolo: string = ""
  error: boolean = false
  search: boolean = false
  objPreferiti: any;
  like: boolean = false;

  constructor(private router: Router, public service: ServiceService, public dialog: MatDialog, private fb: FormBuilder) {
    this.form = this.fb.group({
      cerca: ['', Validators.required],
    });
  }

  ngOnInit() { 
    if(localStorage.getItem("user")){
      this.service.isLogged = true;
      this.user = localStorage.getItem("user");
      this.user = JSON.parse(this.user);
      this.roles = this.user.roles;
      this.roles.forEach((res)=> {
        if(res == "ROLE_ADMIN"){
          this.service.isAdmin = true;
        }
        else{
          this.service.isAdmin = false;
        }
      })
    }
    else{
      this.service.isLogged = false;
    }

  }

  listaPreferiti(){
    this.service.listaPreferiti().subscribe((res)=>{
      this.service.listaPrefe = res 
      this.service.like = true
      if(this.objPreferiti.length < 1){
        this.error = true;
      }  
      });    
  }


  ricerca() {
    this.error = false
    this.titolo = this.form.value.cerca;
    if (this.titolo) {
      this.service.ricerca(this.titolo).subscribe((res) => {
        this.ricette = res;
        if(this.ricette.length < 1)
        this.error = true;
        this.service.errorNav = this.error
      });
    }
  }


  LogOut() {
    // this.tasto = true
    // localStorage.setItem("login", "false");
    // localStorage.setItem("admin", "false");
    // this.service.isLogged = false;
    // this.service.isAdmin = false;
    // this.router.navigate(['Homepage']);
    // this.tasto= false
    if(localStorage.getItem("user")){
      localStorage.removeItem("user");
      localStorage.removeItem("JwtAccess-Token");
      this.service.isLogged = false;
      this.service.isAdmin = false;
      this.router.navigate(['Homepage']);
    }
  }
  LogIn() {
    this.router.navigate(['Login'])
  }
  homepage() {
    this.router.navigate(['Homepage']);
  }
  aggiungiRicetta(){
    this.router.navigate(['creazione']);
  }
}
