import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreazioneRicettaComponent } from './creazione-ricetta.component';

describe('CreazioneRicettaComponent', () => {
  let component: CreazioneRicettaComponent;
  let fixture: ComponentFixture<CreazioneRicettaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreazioneRicettaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreazioneRicettaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
