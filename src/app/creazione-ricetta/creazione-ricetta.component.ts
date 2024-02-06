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
  selectedFile: File | null = null;
  base64String: string |undefined = ""
  file : Blob | undefined
  constructor(private service: ServiceService, private router: Router, private fb: FormBuilder) {
    this.form = this.fb.group({
      titolo: ['', [Validators.required, Validators.minLength(4)]],
      preparazione: ['', [Validators.required, Validators.minLength(4)]],
      quantita: ['', Validators.required],
      ingredienti: ['', [Validators.required, Validators.minLength(4)]],
      categoria: ['', [Validators.required, Validators.minLength(4)]],
      image: ['', Validators.required]
    });
  }


  onUpload(): void {
    if (this.selectedFile) {
      const reader = new FileReader();
      reader.onload = () => {
        this.base64String = reader.result?.toString().split(',')[1];
        this.uploadFile(this.base64String);
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }

  uploadFile(base64String: string | undefined): void {
    this.form.value.image = base64String;
  }

  handleFileInput(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const base64Image = e.target.result as string;
        console.log(base64Image); // Here you get the base64 encoded string
        this.form.value.image = base64Image; 
      };
      reader.readAsDataURL(file);
    }
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
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
   //ricetta.image = ricetta.image.slice(12,21)

    this.service.crezioneRicetta(JSON.stringify(ricetta)).subscribe(()=>{
      alert("ricetta creata!");
      this.router.navigate(['Homepage']);
    },()=> {
      alert("compilare correttamente i campi");
    });
    
  }
}
