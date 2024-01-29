export class Categ{
    id: number
    constructor(){
        this.id= 0
    }
}
export class Ricetta {
    titolo: string
    quantitaPersone: number
    preparazione?: string
    ingredienti?: string
    categoria: Categ

    constructor(){
        this.titolo = "",
        this.quantitaPersone = 0,
        this.preparazione = "",
        this.ingredienti = "",
        this.categoria = {
            id : 0,
        }
    }
}