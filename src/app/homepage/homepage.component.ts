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
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddPreferitiComponent } from '../dialog-add-preferiti/dialog-add-preferiti.component';



@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule, CommonModule, MatCardModule, PaginatorComponent, FormsModule, ReactiveFormsModule],
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
  tipoPiatto: any;
  listaRicette: Ricette[] = [];
  dialogRefDelete: any;
  ricettePrefe: any
  dialogRefLista: any;
  form!: FormGroup;
  like: boolean = false;
  controlloRicette: Ricette[] = []
  objPreferiti: any


  constructor(private router: Router, private route: ActivatedRoute, public service: ServiceService, private fb: FormBuilder, public dialog: MatDialog) {
    this.form = this.fb.group({
      cerca: ['', Validators.required],
    });
  }

  ngOnInit() {  
    this.searchNav = this.service.searchNav;
    this.ricette = this.service.ricetteTrovate

    this.service.listaPreferiti().subscribe((res) => {
      this.objPreferiti = res
      this.controlloRicette = this.objPreferiti;
    });
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

  dettaglio(ricetta:Ricette,id: number) {
    this.router.navigate(['Homepage/'+ ricetta.categoria.categoria + "/" + id]);
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

  deletePreferiti(id: number){
    this.service.idRicettaDeleteLista = id;
    this.service.dialog = this.dialogRefLista;
    this.dialogRefLista = this.dialog.open(DialogDeleteComponent, {
      height: '300px',
      width: '350px',
    });
    this.dialogRefLista.afterClosed().subscribe((result: any) => {
       this.listaPreferiti();
    }); 
  }

  ricerca() {
    this.service.like = false
    this.error = false
    this.ricette
    this.titolo = this.form.value.cerca;
    if(this.titolo){
      this.service.ricerca(this.titolo).subscribe((res) => {
        this.ricettePrefe = res;
        this.service.list = true;
        if(this.ricettePrefe.length < 1){
          this.error = true;
        this.service.list = false;
        }   
      });
    }
  }

  listaPreferiti(){
    this.service.list = false
    this.service.listaPreferiti().subscribe((res)=>{
      this.service.listaPrefe = res 
      this.service.like = true
      if(this.service.listaPrefe.length < 1){
        this.error = true;
      }  
      });    
  }

  listaPreferitiAdd(id: number) {
    // this.service.addRicettaPreferiti(id).subscribe(() => { });
    // alert("ricetta aggiunta alla lista preferiti");
    // window.location.reload()
    this.service.idAddListaPreferiti= id;
    this.service.dialog = this.dialogRefLista;
    this.dialogRefLista = this.dialog.open(DialogAddPreferitiComponent, {
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
