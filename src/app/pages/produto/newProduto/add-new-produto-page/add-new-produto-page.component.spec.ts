import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewProdutoPageComponent } from './add-new-produto-page.component';

describe('AddNewProdutoPageComponent', () => {
  let component: AddNewProdutoPageComponent;
  let fixture: ComponentFixture<AddNewProdutoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddNewProdutoPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNewProdutoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
