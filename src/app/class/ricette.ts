export class Categoria{
    id: number
    categoria: string

    constructor(){
        this.id= 0,
        this.categoria = ""
    }
}
export class Ricette {
    id: number
    titolo: string
    quantitaPersone: number
    preparazione: string
    ingredienti: string
    categoria: Categoria
    image: string

    constructor(){
        this.id = 0,
        this.titolo = "",
        this.quantitaPersone = 0,
        this.preparazione = "",
        this.ingredienti = "",
        this.categoria = {
            id : 0,
            categoria : ""
        }
        this.image = ""
    }
}