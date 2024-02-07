import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ServiceService } from '../service.ts/service.service';
import { Ricetta } from '../class/ricetta';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { Categorie } from '../class/categorie';



@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [MatDialogModule,FormsModule, ReactiveFormsModule, CommonModule, MatFormFieldModule, MatSelectModule],
  providers:[],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css'
})
export class DialogComponent {
  listaCategorie: Categorie[] = [];
  form!: FormGroup;
  constructor(public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder, public service: ServiceService, private router: Router){
    this.form = this.fb.group({
    titolo: new FormControl(this.service.ricettaSelected?.titolo, Validators.required),
    preparazione:  new FormControl(this.service.ricettaSelected?.preparazione, Validators.required),
    quantita:  new FormControl(this.service.ricettaSelected?.quantitaPersone, Validators.required),
    ingredienti:  new FormControl(this.service.ricettaSelected?.ingredienti, Validators.required),
    categoria:  new FormControl(this.service.ricettaSelected?.categoria.categoria, Validators.required),
    image:  new FormControl(this.service.ricettaSelected?.image, Validators.required)
  });
  }

  ngOnInit(){
    this.service.listaCategorie().subscribe((res)=>{
     this.listaCategorie = JSON.parse(res);
    })
  }

  edit(){
    let ricetta = new Ricetta()
    ricetta.titolo = this.form.value.titolo;
    ricetta.preparazione = this.form.value.preparazione;
    ricetta.quantitaPersone = this.form.value.quantita;
    ricetta.ingredienti = this.form.value.ingredienti;
    ricetta.categoria.categoria = this.form.value.categoria;
    ricetta.image = this.form.value.image;

    if (this.form.value.categoria == "primo") {
      ricetta.categoria.id = 1;
    }
    if (this.form.value.categoria == "secondo") {
      ricetta.categoria.id = 2;
    }
    if (this.form.value.categoria == "dolce") {
      ricetta.categoria.id = 3;
    }
    this.service.edit(JSON.stringify(ricetta)).subscribe(()=>{
      alert("ricetta modificata!");
      this.dialogRef.close();
    },()=>{
      alert("errore");
    });
  }

  handleFileInput(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const base64Image = e.target.result as string;
        //console.log(base64Image);
        this.form.value.image = base64Image;
      };
      reader.readAsDataURL(file);
    }
  }
}
