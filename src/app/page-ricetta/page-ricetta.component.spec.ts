import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageRicettaComponent } from './page-ricetta.component';

describe('PageRicettaComponent', () => {
  let component: PageRicettaComponent;
  let fixture: ComponentFixture<PageRicettaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageRicettaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageRicettaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
