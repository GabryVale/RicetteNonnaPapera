import { Injectable } from '@angular/core';
import { Ricette } from '../class/ricette';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }

   ricette: Ricette [] = [
    {
      id: 0,
      titolo: "Rigatoni salsiccia e broccoli",
      quantitaPersone: 0,
      preparazione: "Un bel piatto di pasta è quello che ci vuole per accontentare i gusti di tutti. Ricchi, gustosi, dal sapore avvolgente e facili da preparare. In questa sezione vi voglio proporre mille diverse ricette di primi davvero irresistibili!",
      ingredienti: "pasta, salsiccia",
      idCategorie: 0
    },
    {
      id: 1,
      titolo: "Rigatoni salsiccia e broccoli",
      quantitaPersone: 0,
      preparazione: "Un bel piatto di pasta è quello che ci vuole per accontentare i gusti di tutti. Ricchi, gustosi, dal sapore avvolgente e facili da preparare. In questa sezione vi voglio proporre mille diverse ricette di primi davvero irresistibili!",
      ingredienti: "pasta, salsiccia",
      idCategorie: 0
    },
    {
      id: 0,
      titolo: "Rigatoni salsiccia e broccoli",
      quantitaPersone: 0,
      preparazione: "Un bel piatto di pasta è quello che ci vuole per accontentare i gusti di tutti. Ricchi, gustosi, dal sapore avvolgente e facili da preparare. In questa sezione vi voglio proporre mille diverse ricette di primi davvero irresistibili!",
      ingredienti: "pasta, salsiccia",
      idCategorie: 0
    }
   ]

   getListaRicette(): Observable <any>{
    return of (this.ricette);
   }
}
