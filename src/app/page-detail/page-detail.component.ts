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
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';


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
  popup: boolean = false

  constructor(private route: ActivatedRoute, public service: ServiceService, public router: Router, public dialog: MatDialog) {

  }

  filteredOptions: any;
  search: boolean = false;
  obj: any
  lista: string = ""
  titolo: string = ""
  dialogRef: any


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
    const titolo = document.getElementById(
      'cerca'
    ) as HTMLInputElement | null;
    this.titolo = JSON.stringify(titolo?.value);
    // this.service.ricerca(this.titolo.toString()).subscribe((res) => {
    //   this.ricercaRicetta = JSON.parse(res);
    //   console.log(this.ricercaRicetta)
    // });
    this.service.getDati().subscribe((res) => {
      this.search = true;
      this.tipoPiatto = this.route!.snapshot.params['tipoPagina'];
      this.obj = JSON.parse(res)
      this.ricette = this.obj.content
      if (this.tipoPiatto == "Primi-Piatti") {
        this.ricercaRicetta = [];
        this.ricercaRicetta = this.ricette.filter((res) => res.titolo == titolo?.value && res.categoria.id == 1)
        if (!this.ricercaRicetta) {
          alert("nessuna ricetta trovata in primi piatti");
        }
      }

      if (this.tipoPiatto == "Secondi-Piatti") {
        this.ricercaRicetta = [];
        this.ricercaRicetta = this.ricette.filter((res) => res.titolo == titolo?.value && res.categoria.id == 2)
      } else {
        if (!this.ricercaRicetta) {
          alert("nessuna ricetta trovata in secondi piatti");
        }
      }
      if (this.tipoPiatto == "Contorni") {
        this.ricercaRicetta = [];
        this.ricercaRicetta = this.ricette.filter((res) => res.titolo == titolo?.value && res.categoria.id == 3)
      } else {
        if (!this.ricercaRicetta) {
          alert("nessuna ricetta trovata in contorni");
        }
      }
    })
  }

  cancella(id: number) {
    this.service.delete(id).subscribe(() => {
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
    }, () => {
      alert("errore");
    });
    alert("ricetta eliminata");
  }

  openDialog(ricetta: any, id: number) {
    this.service.ricettaSelected = ricetta;
    this.service.idRicetta = id;
    this.service.dialog = this.dialogRef;
    this.dialogRef = this.dialog.open(DialogComponent, {
      height: '580px',
      width: '600px',
    });
    this.dialogRef.afterClosed().subscribe((result: any) => {
      console.log('The dialog was closed', result);
    });
  }

}