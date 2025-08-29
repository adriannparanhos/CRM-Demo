import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewPropostaPageComponent } from './add-new-proposta-page.component';

describe('AddNewPropostaPageComponent', () => {
  let component: AddNewPropostaPageComponent;
  let fixture: ComponentFixture<AddNewPropostaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddNewPropostaPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNewPropostaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
