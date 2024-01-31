import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../service.ts/service.service';
import { Ricette } from '../class/ricette';
import { PaginatorComponent } from '../paginator/paginator.component';



@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule, CommonModule, MatCardModule, PaginatorComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
  tipoPagina: string = "";
  ricette: Ricette[] = []
  dettaglioRicette: Ricette[] = []
  obj: any;
  pageable: any
  pageSize: number = 0
  cont: number = 0
  constructor(private router: Router, private route: ActivatedRoute, private service: ServiceService) {

  }

  ngOnInit() {
    
    // if (localStorage.getItem("login") == "true") {
    //   this.service.isLogged = true;
    // }
    // else {
    //   this.service.isLogged = false;
    // }
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

  dettaglio(id: number) {
    this.router.navigate(['Homepage/Primi-Piatti/' + id]);
  }

}
