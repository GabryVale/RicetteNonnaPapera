import { Component, Input } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ActivatedRoute, Route } from '@angular/router';
import { ServiceService } from '../service.ts/service.service';
import { Ricette } from '../class/ricette';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {AsyncPipe} from '@angular/common';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';

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

  constructor(private route: ActivatedRoute, private service: ServiceService) {

  }

  myControl = new FormControl('');
  options: string[] = ["rigatoni", "calamarata"];
  filteredOptions: any;

  

  

  ngOnInit() {
    this.tipoPiatto = this.route!.snapshot.params['tipoPiatto'];
    this.service.getListaRicette().subscribe(
      (res) => this.ricette = res
    )

    if (this.tipoPiatto == "Primi-Piatti") {
      this.listaRicette = this.ricette.filter((res) => res.id == 0)
    }
    if(this.tipoPiatto == "Secondi-Piatti"){
      this.listaRicette = this.ricette.filter((res)=> res.id == 1)
    }
    if(this.tipoPiatto == "Contorni"){
      this.listaRicette = this.ricette.filter((res)=> res.id == 2)
    }

    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
   }

   private _filter(value: string) {
    const filterValue = value;

    return this.options.filter(option => option.includes(filterValue));
  }
}
