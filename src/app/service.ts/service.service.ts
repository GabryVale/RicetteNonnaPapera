import { Injectable } from '@angular/core';
import { Ricette } from '../class/ricette';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }
  isAdmin: boolean = false;
  isLogged: boolean = false;
  form: boolean = false;
  apiUrl: string = 'https://bdba-151-84-203-176.ngrok-free.app/';
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
      titolo: "Orata al forno",
      quantitaPersone: 0,
      preparazione: "L'orata al forno, insieme al branzino, è uno dei secondi piatti a base di pesce più amato grazie alla sua semplicità. Realizzarlo infatti è davvero facile",
      ingredienti: "pasta, salsiccia",
      idCategorie: 0
    },
    {
      id: 2,
      titolo: "Patate al forno",
      quantitaPersone: 0,
      preparazione: "Una tira l’altra ma non sono le ciliegie... sono le patate! In questa ricetta nella loro veste più classica, il contorno con le patate per eccellenza: le patate al forno! Impossibile non amarle con il pesce o carne, come il classico arrosto per una cena coi fiocchi. In tantissimi ci avete chiesto qual è il segreto per delle patate al forno croccanti e dorate, insomma perfette.",
      ingredienti: "pasta, salsiccia",
      idCategorie: 0
    }
   ]

   ricetteDettaglio: Ricette[]=[
    {
      id: 0,
      titolo: "Rigatoni salsiccia e broccoli",
      quantitaPersone: 0,
      preparazione: "<p>Una ricetta facile e veloce per un primo piatto ricco e sostanzioso: è la pasta con broccoli e salsiccia. La salsiccia rosolata con i broccoli sposa un formato di pasta, le mezze maniche rigate, che vi si aggrappa con gusto. Per una cena o un pranzo in famiglia.</p> <div><p>COME PREPARARE: PASTA CON BROCCOLI E SALSICCIA</p><p><ul><li>Per preparare la pasta con broccoli e salsiccia iniziate a portare a bollore una capiente pentola piena d’acqua salata. Staccate dai broccoli le cime, sciacquatele sotto l'acqua corrente e dividetele a metà o addirittura in quattro se troppo grandi. Trasferitele nell'acqua bollente, coprite parzialmente e fate cuocere per 6-7 minuti.</li><li>Nel frattempo incidete la salsiccia ed eliminate il budello tirandolo via delicatamente con le mani. Scaldate un buon giro d'olio in una larga padella e fatevi soffriggere lo spicchio d'aglio, incamiciato ma schiacciato. Unite la salsiccia e rosolatela finché avrà preso un bel colore.</li><li>Con l’aiuto di una schiumarola, quindi senza buttare via l’acqua di cottura, prelevate i broccoli cotti e aggiungeteli alla salsiccia a fiamma vivace. Quando li avrete aggiunti tutti, abbassate la fiamma e lasciate cuocere il tutto per 3-4 minuti, quindi eliminate l’aglio e unite una macinata di pepe nero. Tenete in caldo. Nel frattempo avrete riportato a bollore l'acqua di cottura dei broccoli e tuffato la pasta. A cottura ultimata - al dente - prelevate anche le mezze maniche con la schiumarola e trasferitele nella padella con il condimento, sotto la quale avrete riacceso la fiamma. Fate saltare per un paio di minuti, unendo se necessario ancora un po' d'acqua di cottura.</li><li>Porzionate la pasta con broccoli e salsiccia nei singoli piatti e servite.</li></ul></p></div>",
      ingredienti: "<h3>Ingredienti:</h3> <ul><li>320 g di mezze maniche</li><li>300 g di broccoli</li><li>300 g di salsiccia</li><li>1 spicchio d'aglio</li><li>olio extravergine d'oliva</li><li>sale</li><li>pepe nero</li></ul>",
      idCategorie: 0
    },
    {
      id: 1,
      titolo: "Orata al forno",
      quantitaPersone: 0,
      preparazione: "<div><p>Non dovrete fare altro che arricchire il pesce con le erbe aromatiche e sistemarlo su una teglia insieme alle patate... il forno farà il resto. Rispettando i tempi di cottura e la pezzatura del pesce otterrete una carne tenera e delle patate croccanti al punto giusto! Questo piatto è sempre apprezzato da tutti, tanto da non mancare mai sul menù di un buon ristorante di pesce; potrete realizzarlo per tantissime occasioni, come il pranzo della domenica, ma anche per una cena tra amici. Per godere a pieno del gusto dell'orata assicuratevi sempre di acquistare pesce fresco, possibilmente non di allevamento, sentirete la differenza! E se la vostra preoccupazione sono le lische non preoccupatevi, pulire il pesce non sarà così difficile grazie ad una cottura perfetta.</p><p>COME PREPARARE: Orata al forno</p><p><ul><li>Per preparare l’orata al forno si parte dalla pulizia dell’orata: con una forbice tagliate le pinne, poi desquamatela sotto l’acqua corrente utilizzando il dorso di coltello o, se l’avete, con l’apposito attrezzo per desquamare il pesce oppure con la lama di un coltello. Con un paio di forbici praticate un taglio sul ventre dell’orata, procedendo dritto fino a sotto la testa</li>A questo punto levate le interiora e sciacquate bene l’orata sotto l’acqua corrente per eliminare le impurità. Riempite la cavità con i rametti di rosmarino.<li>Aggiungete anche i rametti di timo, i due spicchi d'aglio, poi salate e pepate. In ultimo inserite due fette di limone.</li><li>Passate ora alle patate. Lavatele bene e senza sbucciarle tagliate ciascuna in 4 spicchi. Trasferite in una ciotola condite con olio e fiocchi di sale.</li><li>Aggiungete dell'origano secco e mescolate bene. Ora trasferite l'orata in una teglia capiente e metteteci anche le patate.</li><li>Sistematele bene intorno al pesce, senza sovrapporle. Aggiungete ancora del rosmarino e delle fette di limone, se preferite. Cuocete in forno statico a 180° per 40 minuti. A metà cottura date una mescolata alle patate per una cottura uniforme. Sfornate e servite la vostra orata al forno.</li></ul></p></div>",
      ingredienti: "<h3>Ingredienti:</h3> <ul><li>Orata 900 g</li><li>Rosmarino 1 rametto</li><li>Limoni 2 fette</li><li>Sale fino q.b.</li><li>Aglio 2 spicchi</li><li>Timo 1 rametto</li><li>Pepe nero q.b.</li><li>Patate novelle 400 g</li><li>Origano secco q.b</li><li>Olio extravergine d'oliva 40 g</li></ul>",
      idCategorie: 0
    },
    {
      id: 2,
      titolo: "Patate al forno",
      quantitaPersone: 0,
      preparazione: "<p>Ognuno custodisce il segreto per ottenere le migliori patate al forno: c'è chi le passa sotto acqua corrente fredda o in ammollo per eliminare l'amido, chi le cuoce in forno statico prima coperte con carta alluminio e poi scoprendo la teglia, chi ancora misura millimetricamente gli spicchi o i cubetti per farli tutti uguali e garantire la cottura uniforme o chi prepara le patate al forno con la buccia. Siete curiosi di conoscere quali sono i nostri semplici trucchi per delle patate al forno croccanti da applausi a tavola? Siamo felici di condividerli con voi per farvi assaporare un contorno gustoso che piace sempre a tutti!</p><p>COME PREPARARE: Orata al forno</p><p><ul><li>Per preparare le patate al forno come prima cosa lavatele bene e sbucciatele. Dividete le patate a metà per il senso della lunghezza e poi in quarti.</li><li>Da queste ricavate dei cubetti grandi un paio di cm 4 e man mano trasferitele in una ciotola. In una pentola portate ad ebollizione abbondante acqua e immergete le patate.</li><li>Sbollentatele per 7 minuti quindi scolatele e trasferitele nuovamente in una ciotola. Aromatizzate con le foglioline di timo.</li><li>Aggiungete sale, pepe, olio e mescolate bene con un cucchiaio.</li><li>Trasferite le patate in una teglia di alluminio dai bordi bassi precedentemente unta. Agigungete dei rametti di rosmarino e due spicchi d'aglio. Cuocete le patate in forno ventilato preriscaldato a 220°, nel ripiano centrale, per 40 minuti o fino a quando le patate non risulteranno ben dorate. A metà cottura si raccomanda di mescolare delicatamente le patate per una doratura uniforme. A cottura ultimata sfornate le vostre patate al forno, togliete gli spicchi d'aglio e servitele.</li></ul></p>",
      ingredienti: "<h3>Ingredienti:</h3> <ul><li>Patate (a pasta gialla) 1 kg</li><li>Aglio 2 spicchi</li><li>Sale fino q.b.</li><li>Timo 2 rametti</li><li>Rosmarino 2 rametti</li><li>Olio extravergine d'oliva 30 g</li><li>Pepe nero q.b.</li></ul>",
      idCategorie: 0
    }
   ]

   getListaRicette(): Observable <any>{
    return of (this.ricette);
   }

   getDettaglioRicette(): Observable <any>{
    return of (this.ricetteDettaglio);
   }
}