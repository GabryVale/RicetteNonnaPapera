import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ServiceService } from '../service.ts/service.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dialog-delete',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dialog-delete.component.html',
  styleUrl: './dialog-delete.component.css'
})
export class DialogDeleteComponent {

   id: number = 0;
   constructor(public dialogRef: MatDialogRef<DialogDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, public service: ServiceService, private router: Router){
      
    }

    cancella() {
     this.id = this.service.idRicettaDelete
      this.service.delete(this.id).subscribe(() => {  
        this.dialogRef.close();
      }, () => {
        alert("errore");
      });
    }


    cancellaPreferiti() {
      this.id = this.service.idRicettaDeleteLista
       this.service.deleteRicettaPreferiti(this.id).subscribe(() => { 
       });
       this.dialogRef.close();
       alert("ricetta tolta dalla lista preferiti") 
     }
 

    decline(){
      this.dialogRef.close();
    }
    
}
