import { Component } from '@angular/core';
import { ServiceService } from '../service.ts/service.service';
import { Categoria, Ricette } from '../class/ricette';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { DialogDeleteComponent } from '../dialog-delete/dialog-delete.component';


@Component({
  selector: 'app-page-ricetta',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatCardModule, MatButtonModule],
  templateUrl: './page-ricetta.component.html',
  styleUrl: './page-ricetta.component.css'
})
export class PageRicettaComponent {
  id!: any;
  tipoPiatto!: string;
  titolo: string = ""
  dialogRef: any
  ricette: Ricette[] = [];
  listaRicette: Ricette[] = [];
  ricercaRicetta: Ricette[] = [];
  obj: any
  lista: string = ""


  ricetta: Ricette = {
    id: 0,
    titolo: "",
    quantitaPersone: 0,
    preparazione: "",
    ingredienti: "",
    categoria: new Categoria(),
    image: ""
  };
  dialogRefDelete: any;

  constructor(public service: ServiceService, private route: ActivatedRoute, public dialog: MatDialog, private router: Router) {

  }

  ngOnInit() {
    this.id = this.route!.snapshot.params['id'];
    this.service.getDetailPage(this.id).subscribe((res) => this.ricetta = JSON.parse(res));
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
      this.service.getDetailPage(id).subscribe((res) => this.ricetta = JSON.parse(res));
      // this.service.getDati().subscribe((res) => {
      //   this.obj = JSON.parse(res)
      //   this.ricette = this.obj.content
      //   this.tipoPiatto = this.route!.snapshot.params['tipoPagina'];

      //   if (this.tipoPiatto == "Primi-Piatti") {
      //     this.listaRicette = this.ricette.filter((res) => res.categoria.id == 1)
      //   }
      //   if (this.tipoPiatto == "Secondi-Piatti") {
      //     this.listaRicette = this.ricette.filter((res) => res.categoria.id == 2)
      //   }
      //   if (this.tipoPiatto == "Contorni") {
      //     this.listaRicette = this.ricette.filter((res) => res.categoria.id == 3)
      //   }
      // })
    });
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

  openDialogDelete(id: number) {
    this.service.idRicettaDelete = id;
    this.service.dialog = this.dialogRefDelete;
    this.dialogRef = this.dialog.open(DialogDeleteComponent, {
      height: '300px',
      width: '350px',
    });
    this.dialogRef.afterClosed().subscribe((result: any) => {
      this.router.navigate(['Homepage']);
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
}
