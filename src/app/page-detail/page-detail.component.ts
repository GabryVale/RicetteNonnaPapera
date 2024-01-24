import { Component, Input } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ServiceService } from '../service.ts/service.service';
import { Categoria, Ricette } from '../class/ricette';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { AsyncPipe } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-page-detail',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MatToolbarModule, MatCardModule, MatButtonModule, CommonModule, MatFormFieldModule, MatAutocompleteModule, MatInputModule, AsyncPipe],
  templateUrl: './page-detail.component.html',
  styleUrl: './page-detail.component.css'
})
export class PageDetailComponent {
  tipoPiatto!: string;

  ricette: Ricette[] = [];
  listaRicette: Ricette[] = [];
  ricercaRicetta: Ricette = {
    id: 0,
    titolo: undefined,
    quantitaPersone: 0,
    preparazione: undefined,
    ingredienti: undefined,
    categoria: new Categoria()
  }

  constructor(private route: ActivatedRoute, public service: ServiceService, public router: Router) {

  }

  myControl = new FormControl('');
  options: string[] = ["rigatoni", "calamarata"];
  filteredOptions: any;
  cerca: boolean = false
  obj: any




  ngOnInit() {
    this.tipoPiatto = this.route!.snapshot.params['tipoPagina'];
    this.service.getDati().subscribe(
      (res) => this.obj = JSON.parse(res)
    )
    this.ricette = this.obj.content;
    if (this.tipoPiatto == "Primi-Piatti") {
      this.listaRicette = this.ricette.filter((res) => res.categoria.id == 1)
    }
    if (this.tipoPiatto == "Secondi-Piatti") {
      this.listaRicette = this.ricette.filter((res) => res.categoria.id == 2)
    }
    if (this.tipoPiatto == "Contorni") {
      this.listaRicette = this.ricette.filter((res) => res.categoria.id == 3)
    }
  }


  dettaglioRicette(titolo: string, id: number) {

    this.tipoPiatto = this.route!.snapshot.params['tipoPagina'];
    
    if (this.tipoPiatto == "Primi-Piatti") {
      this.router.navigate(['Homepage/Primi-Piatti/'+ id])
    }
    if (this.tipoPiatto == "Secondi-Piatti") {
      this.router.navigate(['Homepage/Secondi-Piatti/'+ id])
    }
    if (this.tipoPiatto == "Contorni") {
      this.router.navigate(['Homepage/Contorni/'+ id])
    }
  }

  ricerca(){
    this.cerca = true;
    this.tipoPiatto = this.route!.snapshot.params['tipoPagina'];
    const titolo = document.getElementById(
      'cerca'
    ) as HTMLInputElement | null;
    this.service.ricerca(titolo?.value).subscribe((res)=>{
      this.ricercaRicetta = JSON.parse(res);
      
    });
    console.log(titolo?.value)
    localStorage.setItem('ricerca', JSON.stringify(this.ricercaRicetta));
  }

  cancella(id: number) {
    
      //this.ricette.splice(index, 1);
      console.log(id)
      this.service.delete(id).subscribe();
    
    this.service.getDati().subscribe(
      (res) => this.ricette = JSON.parse(res)
    )

    // this.service.getListaRicette().subscribe((res)=>{
    //   this.ricette=res;
    // })
    this.tipoPiatto = this.route!.snapshot.params['tipoPagina'];

    if (this.tipoPiatto == "Primi-Piatti") {
      this.listaRicette = this.ricette.filter((res) => res.categoria.id == 1)
    }
    if (this.tipoPiatto == "Secondi-Piatti") {
      this.listaRicette = this.ricette.filter((res) => res.categoria.id == 2)
    }
    if (this.tipoPiatto == "Contorni") {
      this.listaRicette = this.ricette.filter((res) => res.categoria.id == 3)
    }
  }
}