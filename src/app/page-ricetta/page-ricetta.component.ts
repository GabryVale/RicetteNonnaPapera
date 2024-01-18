import { Component } from '@angular/core';
import { ServiceService } from '../service.ts/service.service';
import { Ricette } from '../class/ricette';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-page-ricetta',
  standalone: true,
  imports: [CommonModule],
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
    this.service.getDettaglioRicette().subscribe((res)=>
     this.dettaglioRicette = res
    )

    this.tipoPiatto = this.route!.snapshot.params['tipoPagina'];
    
    if (this.tipoPiatto == "Primi-Piatti") {
      this.listaRicette = this.dettaglioRicette.filter((res) => res.id == 0)
    }
    if (this.tipoPiatto == "Secondi-Piatti") {
      this.listaRicette = this.dettaglioRicette.filter((res) => res.id == 1)
    }
    if (this.tipoPiatto == "Contorni") {
      this.listaRicette = this.dettaglioRicette.filter((res) => res.id == 2)
    }
  }

}
