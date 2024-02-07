import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../service.ts/service.service';
import { Ricette } from '../class/ricette';
import { PaginatorComponent } from '../paginator/paginator.component';
import { DialogComponent } from '../dialog/dialog.component';
import { DialogDeleteComponent } from '../dialog-delete/dialog-delete.component';



@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule, CommonModule, MatCardModule, PaginatorComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
  tipoPagina: string = "";
  ricette: Ricette[] = []
  
  obj: any;
  pageable: any
  pageSize: number = 0
  cont: number = 0
  titolo: string = ""
  messageError: string = "nessuna ricetta trovata"
  error: boolean = false;
  searchNav: boolean = true;
  dialogRef: any;
  dialog: any;
  tipoPiatto: any;
  listaRicette: Ricette[] = [];
  dialogRefDelete: any;
  ricettePrefe: any
  dialogRefLista: any;


  constructor(private router: Router, private route: ActivatedRoute, public service: ServiceService) {
    
  }

  ngOnInit() {
    
    // if (localStorage.getItem("login") == "true") {
    //   this.service.isLogged = true;
    // }
    // else {
    //   this.service.isLogged = false;
    // }
    
    this.searchNav = this.service.searchNav;
    this.ricette = this.service.ricetteTrovate
  }

  primiPiatti() {
    this.router.navigate(['Homepage/Primi-Piatti'])
  }

  secondiPiatti() {
    this.router.navigate(['Homepage/Secondi-Piatti'])
  }

  contorni() {
    this.router.navigate(['Homepage/Contorni'])
  }

  dettaglio(id: number) {
    this.router.navigate(['Homepage/Primi-Piatti/' + id]);
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
      alert("ricetta aliminata")
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

  deletePreferiti(id: number){
    this.service.idRicettaDeleteLista = id;
    this.service.dialog = this.dialogRefLista;
    this.dialogRefLista = this.dialog.open(DialogDeleteComponent, {
      height: '300px',
      width: '350px',
    });
    this.dialogRefLista.afterClosed().subscribe((result: any) => {
       this.listaPreferiti();
       alert("ricetta tolta dalla lista preferiti")
    });
    
  }
  listaPreferiti() {
    throw new Error('Method not implemented.');
  }

  
}
