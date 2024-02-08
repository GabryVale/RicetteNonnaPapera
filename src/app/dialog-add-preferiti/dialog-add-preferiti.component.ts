import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogLogoutComponent } from '../dialog-logout/dialog-logout.component';
import { ServiceService } from '../service.ts/service.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dialog-add-preferiti',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dialog-add-preferiti.component.html',
  styleUrl: './dialog-add-preferiti.component.css'
})
export class DialogAddPreferitiComponent {
  id: number = 0;
  constructor(public dialogRef: MatDialogRef<DialogAddPreferitiComponent >,
    @Inject(MAT_DIALOG_DATA) public data: any, public service: ServiceService, private router: Router){
      
    }


    addPreferiti(){
      this.id = this.service.idAddListaPreferiti;
      this.service.addRicettaPreferiti(this.id).subscribe(() => { });
      alert("ricetta aggiunta alla lista preferiti");
      this.dialogRef.close();
      window.location.reload()
    }

    decline(){
      this.dialogRef.close();
    }

}
