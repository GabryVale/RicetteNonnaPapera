import { Component, Input } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-page-detail',
  standalone: true,
  imports: [MatToolbarModule],
  templateUrl: './page-detail.component.html',
  styleUrl: './page-detail.component.css'
})
export class PageDetailComponent {
    tipoPiatto!: string;

    constructor(private route: ActivatedRoute){

    }

    ngOnInit(){
     this.tipoPiatto= this.route!.snapshot.params['tipoPiatto'];
     console.log(this.route!.snapshot.params['tipoPiatto'])
    }

}
