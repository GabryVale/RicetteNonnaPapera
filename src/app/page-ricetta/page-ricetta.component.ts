import { Component } from '@angular/core';
import { ServiceService } from '../service.ts/service.service';
import { Categoria, Ricette } from '../class/ricette';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-page-ricetta',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatCardModule, MatButtonModule],
  templateUrl: './page-ricetta.component.html',
  styleUrl: './page-ricetta.component.css'
})
export class PageRicettaComponent {
  id!: any;

  
  ricetta: Ricette = {
    id: 0,
    titolo: undefined,
    quantitaPersone: 0,
    preparazione: undefined,
    ingredienti: undefined,
    categoria: new Categoria()
  };

  constructor(private service: ServiceService, private route: ActivatedRoute){

  }

  ngOnInit(){  
    this.id = this.route!.snapshot.params['id'];
    this.service.getDetailPage(this.id).subscribe((res)=> this.ricetta = JSON.parse(res));
    }
  }


