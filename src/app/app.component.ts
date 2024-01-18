import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { LoginComponent } from './login/login.component';
import { PageDetailComponent } from './page-detail/page-detail.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ServiceService } from './service.ts/service.service';
import { Ricette } from './class/ricette';
import { PageRicettaComponent } from './page-ricetta/page-ricetta.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, NavbarComponent,LoginComponent, PageDetailComponent, HomepageComponent, PageRicettaComponent]
})
export class AppComponent {

  tipoPagina: string= "";
  ricette: Ricette[]=[]
  constructor(private router: Router, private route: ActivatedRoute, private service: ServiceService){

  }


  ngOnInit(){
  }

  
  
}
