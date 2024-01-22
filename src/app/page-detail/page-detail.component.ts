import { Component, Input } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ServiceService } from '../service.ts/service.service';
import { Ricette } from '../class/ricette';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { AsyncPipe } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { map, startWith } from 'rxjs';


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

  constructor(private route: ActivatedRoute, public service: ServiceService, public router: Router) {

  }

  myControl = new FormControl('');
  options: string[] = ["rigatoni", "calamarata"];
  filteredOptions: any;




  ngOnInit() {
    this.tipoPiatto = this.route!.snapshot.params['tipoPagina'];
    this.service.getDati().subscribe(
      (res) => this.ricette = res
    )

     console.log(this.ricette)
    if (this.tipoPiatto == "Primi-Piatti") {
      this.listaRicette = this.ricette.filter((res) => res.categoria.id == 1)
    }
    if (this.tipoPiatto == "Secondi-Piatti") {
      this.listaRicette = this.ricette.filter((res) => res.categoria.id == 2)
    }
    if (this.tipoPiatto == "Contorni") {
      this.listaRicette = this.ricette.filter((res) => res.categoria.id == 3)
    }

    // if (this.tipoPiatto == "Primi-Piatti") {
    //   this.listaRicette = this.ricette.filter((res) => res.id == 0)
    // }
    // if (this.tipoPiatto == "Secondi-Piatti") {
    //   this.listaRicette = this.ricette.filter((res) => res.id == 1)
    // }
    // if (this.tipoPiatto == "Contorni") {
    //   this.listaRicette = this.ricette.filter((res) => res.id == 2)
    // }

    // this.filteredOptions = this.myControl.valueChanges.pipe(
    //   startWith(''),
    //   map(value => this._filter(value || '')),
    // );
  }

  // private _filter(value: string) {
  //   const filterValue = value;

  //   return this.options.filter(option => option.includes(filterValue));
  // }

  dettaglioRicette() {
    this.tipoPiatto = this.route!.snapshot.params['tipoPagina'];
    
    if (this.tipoPiatto == "Primi-Piatti") {
      this.listaRicette = this.ricette.filter((res) => res.categoria.id == 1)
      this.router.navigate(['Homepage/Primi-Piatti/1'])
    }
    if (this.tipoPiatto == "Secondi-Piatti") {
      this.listaRicette = this.ricette.filter((res) => res.categoria.id == 2)
      this.router.navigate(['Homepage/Secondi-Piatti/2'])
    }
    if (this.tipoPiatto == "Contorni") {
      this.listaRicette = this.ricette.filter((res) => res.categoria.id == 3)
      this.router.navigate(['Homepage/Contorni/3'])
    }
  }

  ricerca(){
    this.tipoPiatto = this.route!.snapshot.params['tipoPagina'];
    const titolo = document.getElementById(
      'cerca'
    ) as HTMLInputElement | null;
    this.service.ricerca(titolo?.value).subscribe((res)=>{
      this.ricette = res;
    });

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

  cancella(ricetta: Ricette) {
    const index = this.ricette.indexOf(ricetta);
    if (index > -1) {
      //this.ricette.splice(index, 1);
      this.service.delete(index).subscribe();
    }
    this.service.getDati().subscribe(
      (res) => this.ricette = res
    )
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
