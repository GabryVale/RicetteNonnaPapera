import { Component } from '@angular/core';
import { Ricette } from '../class/ricette';
import { ServiceService } from '../service.ts/service.service';
import { Router } from '@angular/router';
import { Ricetta } from '../class/ricetta';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { Categorie } from '../class/categorie';

@Component({
  selector: 'app-creazione-ricetta',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MatFormFieldModule, MatSelectModule],
  templateUrl: './creazione-ricetta.component.html',
  styleUrl: './creazione-ricetta.component.css'
})
export class CreazioneRicettaComponent {
  listaCategorie: Categorie [] =[];
  constructor(private service: ServiceService, private router: Router, private fb: FormBuilder) {
    this.form = this.fb.group({
      titolo: ['', Validators.required],
      preparazione: ['', Validators.required],
      quantita: ['', Validators.required],
      ingredienti: ['', Validators.required],
      categoria: ['', Validators.required]
    });
  }

  ngOnInit(){
    this.service.listaCategorie().subscribe((res)=>{
     this.listaCategorie = JSON.parse(res);
    })
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
      alert("compilare correttamente i campi");
    });
    this.router.navigate(['Homepage']);
  }
}
