import { Component, Input, Output, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { User } from '../class/user';
import { PageDetailComponent } from '../page-detail/page-detail.component';
import { EventEmitter } from 'stream';


@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule, CommonModule, MatCardModule],
})
export class NavbarComponent {
  tipoPagina : string = "";
  

  isLogin: boolean = true;
  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
  }
  LogOut() {
    this.router.navigate(['HomePage']);
  }
  LogIn() {
    this.router.navigate(['Login'])
  }

}
