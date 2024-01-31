import { Component, Input } from '@angular/core';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { ServiceService } from '../service.ts/service.service';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { Ricette } from '../class/ricette';

@Component({
  selector: 'app-paginator',
  standalone: true,
  imports: [MatPaginatorModule, MatCardModule, CommonModule],
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.css'
})
export class PaginatorComponent {
  obj: any
  ricette: Ricette[] = [];
  pageIndex = 0;
  pageSize = 10;
  pageEvent: PageEvent | undefined;
  ricettePaginator: Ricette[] = [];
  length: number = 0;
  sizePage: number = 0;
  cont: number = 0;

  constructor(private service: ServiceService, private router: Router) {

  }

  ngOnInit() {
    this.ricettePaginator.length = 2;
    this.service.getDati().subscribe((res) => {
      this.obj = JSON.parse(res)
      this.ricette = this.obj.content
      this.ricettePaginator = this.ricette.slice(0, 2);
    })
  }


  dettaglio(id: number) {
    this.router.navigate(['Homepage/Primi-Piatti/' + id]);
  }

  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.pageIndex = e.pageIndex;

    if (this.pageIndex == 0) {
      this.ricettePaginator = this.ricette.slice(0, 2);
    }
    if (this.pageIndex == 1) {
      this.ricettePaginator = this.ricette.slice(2, 4);
    }
    if (this.pageIndex == 2) {
      this.ricettePaginator = this.ricette.slice(4, 6);
    }
  }
}