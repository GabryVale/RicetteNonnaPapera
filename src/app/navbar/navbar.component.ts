import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { ServiceService } from '../service.ts/service.service';


@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule, CommonModule, MatCardModule],
})
export class NavbarComponent {
  tipoPagina : string = "";
  

  constructor(private router: Router, private route: ActivatedRoute, public service: ServiceService) {
  }

  ngOnInit() { 
    if(localStorage.getItem("login") == "false"){
      this.service.isLogged = false;
    }
    else{
      this.service.isLogged = true;
    }

    if(localStorage.getItem("admin") == "false"){
      this.service.isAdmin = false;
    }
    else{
      this.service.isAdmin = true;
    }
  }
  LogOut() {
    localStorage.setItem("login", "false");
    localStorage.setItem("admin", "false");
    this.service.isLogged = false;
    this.service.isAdmin = false;
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
