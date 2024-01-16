export class Ricette{
    id: number
    titolo: string
    quantitaPersone: number
    preparazione: string
    ingredienti: string
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