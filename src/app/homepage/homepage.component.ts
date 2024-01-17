import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule, CommonModule, MatCardModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
  tipoPagina: string= "";
  constructor(private router: Router, private route: ActivatedRoute){

  }
  
  ngOnInit(){
    
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
