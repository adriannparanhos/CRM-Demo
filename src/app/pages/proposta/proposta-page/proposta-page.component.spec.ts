import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropostaPageComponent } from './proposta-page.component';

describe('PropostaPageComponent', () => {
  let component: PropostaPageComponent;
  let fixture: ComponentFixture<PropostaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropostaPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropostaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
