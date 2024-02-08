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
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { DialogDeleteComponent } from '../dialog-delete/dialog-delete.component';
import { Categ, Ricetta } from '../class/ricetta';


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
  ricercaRicetta: Ricette[] = [];
  listaPref: Ricette[] = [];
  popup: boolean = false
  form: FormGroup
  error: boolean = false;
  like: boolean = false;

  constructor(private route: ActivatedRoute, public service: ServiceService, public router: Router, public dialog: MatDialog, private fb: FormBuilder) {
    this.form = this.fb.group({
      cerca: ['', Validators.required],
    });
  }

  search: boolean = false;
  obj: any
  objPreferiti: any
  lista: string = ""
  titolo: string = ""
  dialogRef: any
  dialogRefDelete: any
  messageError: string = "nessuna ricetta trovata"
  liked: boolean = false;
  str: string = ""
  dialogRefLista: any
  list: boolean = false;
  likeIcon: number[] = []
  preferiti: Ricetta[] = []
  returnTrue: boolean = true
  returnFalse: boolean = false
  controlloRicette: Ricette[] = []


  ngOnInit() {
    this.search = false
    this.service.getDati().subscribe((res) => {
      this.obj = JSON.parse(res)
      this.ricette = this.obj.content
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
    })

    this.service.listaPreferiti().subscribe((res) => {
      this.objPreferiti = res
      this.controlloRicette = this.objPreferiti;
    });
  }


  dettaglioRicette(titolo: string, id: number) {

    this.tipoPiatto = this.route!.snapshot.params['tipoPagina'];

    if (this.tipoPiatto == "Primi-Piatti") {
      this.router.navigate(['Homepage/Primi-Piatti/' + id])
    }
    if (this.tipoPiatto == "Secondi-Piatti") {
      this.router.navigate(['Homepage/Secondi-Piatti/' + id])
    }
    if (this.tipoPiatto == "Contorni") {
      this.router.navigate(['Homepage/Contorni/' + id])
    }
  }

  ricerca() {
    this.error = false
    this.titolo = this.form.value.cerca;
    if (this.titolo) {
      this.service.ricerca(this.titolo).subscribe((res) => {
        this.listaRicette = res;
        if (this.tipoPiatto == "Primi-Piatti") {
          this.listaRicette = this.listaRicette.filter((res) => res.categoria.categoria == "primo")
        }
        if (this.tipoPiatto == "Secondi-Piatti") {
          this.listaRicette = this.listaRicette.filter((res) => res.categoria.categoria == "secondo")
        }
        if (this.tipoPiatto == "Contorni") {
          this.listaRicette = this.listaRicette.filter((res) => res.categoria.categoria == "dolce")
        }
        if (this.listaRicette.length < 1)
          this.error = true;
      });
    }
  }



  openDialog(ricetta: any, id: number) {
    this.service.ricettaSelected = ricetta;
    this.service.idRicetta = id;
    this.service.dialog = this.dialogRef;
    this.dialogRef = this.dialog.open(DialogComponent, {
      height: '600px',
      width: '600px',
    });
    this.dialogRef.afterClosed().subscribe((result: any) => {
      this.service.getDati().subscribe((res) => {
        this.obj = JSON.parse(res)
        this.ricette = this.obj.content
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
      })
    });
  }


  openDialogDelete(id: number) {
    this.service.idRicettaDelete = id;
    this.service.dialog = this.dialogRefDelete;
    this.dialogRefDelete = this.dialog.open(DialogDeleteComponent, {
      height: '300px',
      width: '350px',
    });
    this.dialogRefDelete.afterClosed().subscribe((result: any) => {
      this.service.getDati().subscribe((res) => {
        this.obj = JSON.parse(res)
        this.ricette = this.obj.content
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
      })
    });
  }


  listaPreferiti() {
    this.list = true
    this.service.listaPreferiti().subscribe((res) => {
      this.objPreferiti = res
      this.like = true
      if (this.objPreferiti.length < 1) {
        this.error = true;
      }
    });
  }

  listaPreferitiAdd(id: number) {
    this.service.addRicettaPreferiti(id).subscribe(() => { });
    alert("ricetta aggiunta alla lista preferiti");
  }


  deletePreferiti(id: number) {
    this.service.idRicettaDeleteLista = id;
    this.service.dialog = this.dialogRefLista;
    this.dialogRefLista = this.dialog.open(DialogDeleteComponent, {
      height: '300px',
      width: '350px',
    });
  }

 ret: Ricette | undefined
 controllo: boolean = false
  
 
  controllaIcon(ricetta: Ricette): boolean {
    this.ret = this.controlloRicette.find((res)=>res.id == ricetta.id)
    if(this.ret){
      this.service.controllo = true
      return this.service.controllo
    }else{
      this.service.controllo = false
      return this.service.controllo
    }
     
  }
}