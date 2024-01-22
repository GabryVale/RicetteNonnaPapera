import { Component } from '@angular/core';
import { ServiceService } from '../service.ts/service.service';
import { Ricette } from '../class/ricette';
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
  tipoPiatto!: string;

  
  listaRicette: Ricette[] = [];
  dettaglioRicette: Ricette[]=[];

  constructor(private service: ServiceService, private route: ActivatedRoute){

  }

  ngOnInit(){
    this.service.getDati().subscribe((res)=>
     this.dettaglioRicette = res
    )

    this.tipoPiatto = this.route!.snapshot.params['tipoPagina'];
    
    if (this.tipoPiatto == "Primi-Piatti") {
      this.listaRicette = this.dettaglioRicette.filter((res) => res.categoria.id == 1)
    }
    if (this.tipoPiatto == "Secondi-Piatti") {
      this.listaRicette = this.dettaglioRicette.filter((res) => res.categoria.id == 2)
    }
    if (this.tipoPiatto == "Contorni") {
      this.listaRicette = this.dettaglioRicette.filter((res) => res.categoria.id == 3)
    }
  }

}
