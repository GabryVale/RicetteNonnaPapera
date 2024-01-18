import { Component } from '@angular/core';
import { Ricette } from '../class/ricette';
import { ServiceService } from '../service.ts/service.service';

@Component({
  selector: 'app-creazione-ricetta',
  standalone: true,
  imports: [],
  templateUrl: './creazione-ricetta.component.html',
  styleUrl: './creazione-ricetta.component.css'
})
export class CreazioneRicettaComponent {
     constructor(private service: ServiceService){

     }

     id: number = 0
       tit: string = " "
       quantitaPersone: number = 0
       preparazione: string = ""
       ingredienti: string = ""
       idCategorie: number = 0
     
     ricetta: Ricette ={
       id: 0,
       titolo: '',
       quantitaPersone: 0,
       preparazione: '',
       ingredienti: '',
       idCategorie: 0
     }
     creazioneRicetta(){
      const titolo = document.getElementById(
        'titolo',
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
      

      //capire come prendere i dati del form per aggiungere una ricetta
      
     }

     

}
