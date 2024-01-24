import { Component } from '@angular/core';
import { Ricette } from '../class/ricette';
import { ServiceService } from '../service.ts/service.service';
import { Router } from '@angular/router';
import { Ricetta } from '../class/ricetta';

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
     
     
     creazioneRicetta(){
     let ricetta = new Ricetta()
      const titolo = document.getElementById(
        'titolo'
      ) as HTMLInputElement | null;
      const preparazione = document.getElementById(
        'preparazione',
      ) as HTMLInputElement | null;
      const quantita = document.getElementById(
        'quantita persone',
      ) as HTMLInputElement | null;
      const ingredienti = document.getElementById(
        'ingredienti',
      ) as HTMLInputElement | null;
      

      ricetta.titolo = titolo?.value;
      ricetta.preparazione = preparazione?.value;
      ricetta.quantitaPersone = quantita?.value;
      ricetta.ingredienti = ingredienti?.value;
      //this.service.ric.push(ricetta);
      this.service.crezioneRicetta(ricetta).subscribe((res)=> {
        
      });
      this.router.navigate(['Homepage']);
    }
}
