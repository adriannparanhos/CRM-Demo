import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewClientePageComponent } from './add-new-cliente-page.component';

describe('AddNewClientePageComponent', () => {
  let component: AddNewClientePageComponent;
  let fixture: ComponentFixture<AddNewClientePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddNewClientePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNewClientePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
