import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddPreferitiComponent } from './dialog-add-preferiti.component';

describe('DialogAddPreferitiComponent', () => {
  let component: DialogAddPreferitiComponent;
  let fixture: ComponentFixture<DialogAddPreferitiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogAddPreferitiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogAddPreferitiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
