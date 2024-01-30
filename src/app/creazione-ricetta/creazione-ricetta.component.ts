import { Component } from '@angular/core';
import { Ricette } from '../class/ricette';
import { ServiceService } from '../service.ts/service.service';
import { Router } from '@angular/router';
import { Ricetta } from '../class/ricetta';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-creazione-ricetta',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './creazione-ricetta.component.html',
  styleUrl: './creazione-ricetta.component.css'
})
export class CreazioneRicettaComponent {
  constructor(private service: ServiceService, private router: Router, private fb: FormBuilder) {
    this.form = this.fb.group({
      titolo: ['', Validators.required],
      preparazione: ['', Validators.required],
      quantita: ['', Validators.required],
      ingredienti: ['', Validators.required],
      categoria: ['', Validators.required]
    });
  }

  form!: FormGroup;
  creazioneRicetta() {
    let ricetta = new Ricetta()
    ricetta.titolo = this.form.value.titolo;
    ricetta.preparazione = this.form.value.preparazione;
    ricetta.quantitaPersone = this.form.value.quantita;
    ricetta.ingredienti = this.form.value.ingredienti;
    ricetta.categoria.categoria = this.form.value.categoria;

    if (this.form.value.categoria == "primo") {
      ricetta.categoria.id = 1;
    }
    if (this.form.value.categoria == "secondo") {
      ricetta.categoria.id = 2;
    }
    if (this.form.value.categoria == "dolce") {
      ricetta.categoria.id = 3;
    }

    this.service.crezioneRicetta(JSON.stringify(ricetta)).subscribe(()=>{
      alert("ricetta creata!");
    },()=> {
      alert("errore");
    });
    this.router.navigate(['Homepage']);
  }
}
