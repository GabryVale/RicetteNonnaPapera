import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { LoginComponent } from './login/login.component';
import { PageDetailComponent } from './page-detail/page-detail.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, NavbarComponent,LoginComponent, PageDetailComponent]
})
export class AppComponent {
  constructor(private router: Router){

  }
}
