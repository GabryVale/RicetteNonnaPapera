import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ServiceService } from '../service.ts/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog-delete',
  standalone: true,
  imports: [],
  templateUrl: './dialog-delete.component.html',
  styleUrl: './dialog-delete.component.css'
})
export class DialogDeleteComponent {
   constructor(public dialogRef: MatDialogRef<DialogDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, public service: ServiceService, private router: Router){
      
    }

    id: number = 0;



    cancella() {
     this.id = this.service.idRicettaDelete
      this.service.delete(this.id).subscribe(() => {  
        this.dialogRef.close();
      }, () => {
        alert("errore");
      });
    }


    decline(){
      this.dialogRef.close();
    }
    
}
