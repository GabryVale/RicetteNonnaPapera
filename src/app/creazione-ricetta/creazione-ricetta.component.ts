import { Component } from '@angular/core';
import { Ricette } from '../class/ricette';
import { ServiceService } from '../service.ts/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creazione-ricetta',
  standalone: true,
  imports: [],
  templateUrl: './creazione-ricetta.component.html',
  styleUrl: './creazione-ricetta.component.css'
})
export class CreazioneRicettaComponent {
     constructor(private service: ServiceService, private router: Router){

     }

     id: number = 0
       tit: string = " "
       quantitaPersone: number = 0
       preparazione: string = ""
       ingredienti: string = ""
       idCategorie: number = 0
     
     creazioneRicetta(){
     let ricetta = new Ricette()
      const titolo = document.getElementById(
        'titolo'
      ) as HTMLInputElement | null;
      const descrizione = document.getElementById(
        'descrizione',
      ) as HTMLInputElement | null;
      const step = document.getElementById(
        'step',
      ) as HTMLInputElement | null;
      const ingredienti = document.getElementById(
        'ingredienti',
      ) as HTMLInputElement | null;
      

      ricetta.titolo = titolo?.value;
      ricetta.preparazione = descrizione?.value;
      ricetta.ingredienti = ingredienti?.value;
      //this.service.ricette.push(this.ricetta);
      this.service.crezioneRicetta(ricetta).subscribe();
      this.router.navigate(['Homepage']);
    }
}
