import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogDeleteComponent } from '../dialog-delete/dialog-delete.component';
import { ServiceService } from '../service.ts/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog-logout',
  standalone: true,
  imports: [],
  templateUrl: './dialog-logout.component.html',
  styleUrl: './dialog-logout.component.css'
})
export class DialogLogoutComponent {

  constructor(public dialogRef: MatDialogRef<DialogLogoutComponent >,
    @Inject(MAT_DIALOG_DATA) public data: any, public service: ServiceService, private router: Router){
      
    }

    logOut() {
      if(localStorage.getItem("user")){
        localStorage.removeItem("user");
        localStorage.removeItem("JwtAccess-Token");
        this.service.isLogged = false;
        this.service.isAdmin = false;
        this.router.navigate(['Homepage']);
        alert("account scollegato");
        this.dialogRef.close();
      }
    }


    decline(){
      this.dialogRef.close();
    }

}
