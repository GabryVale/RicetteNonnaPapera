export class Ricette{
    id: number
    titolo: any
    quantitaPersone: number
    preparazione: any
    ingredienti: any
    idCategorie: number

    constructor(){
        this.id = 0,
        this.titolo = "",
        this.quantitaPersone = 0,
        this.preparazione = "",
        this.ingredienti = "",
        this.idCategorie = 0
    }
}