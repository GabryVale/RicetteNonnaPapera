import { Component, Output, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { User } from '../class/user';
import { PageDetailComponent } from '../page-detail/page-detail.component';


@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule, CommonModule, MatCardModule],
})
export class NavbarComponent {

  isLogin: boolean = true;
  @Output() tipoPiatto: string = '';
  constructor(private router: Router) {

  }

  ngOnInit() {
  }
  LogOut() {
    this.router.navigate(['HomePage']);
  }
  LogIn() {
    this.router.navigate(['Login'])
  }

  primiPiatti() {
    this.router.navigate(['Homepage/Primi-Piatti'])
  }

  secondiPiatti() {
    this.router.navigate(['Homepage/Secondi-Piatti'])
  }

  contorni() {
    this.router.navigate(['Homepage/Contorni'])
  }
}
