import { Component, OnInit } from '@angular/core';
import { FormDef } from '../../../../shared/components/resource-form/models/FormDef';
import { Proposta } from '../../models/Proposta';
import { FormBuilder } from '@angular/forms';
import { PropostaMetadataService } from '../../../../core/services/proposta/proposta-metadata.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PropostaService } from '../../../../core/services/proposta/proposta.service';  
import { ResourceFormComponent } from '../../../../shared/components/resource-form/resource-form.component';
import { BudgetItemsComponent } from '../../../../shared/components/budget-items/budget-items.component';
import { OrcamentoService } from '../../../../core/services/proposta/orcamento.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-add-new-proposta-page',
  imports: [ResourceFormComponent, BudgetItemsComponent],
  templateUrl: './add-new-proposta-page.component.html',
  styleUrl: './add-new-proposta-page.component.scss'
})
export class AddNewPropostaPageComponent implements OnInit {
  formDefs: FormDef[] = [];
  propostaData: Proposta | null = null;
  isEditing: boolean = false;

  constructor(
    private fb: FormBuilder,
    private propostaMetadataService: PropostaMetadataService,
    private route: ActivatedRoute,
    private router: Router,
    private propostaService: PropostaService,
    private orcamentoService: OrcamentoService
  ) {
    this.formDefs = this.propostaMetadataService.getFields()
      .filter(field => field.isFormField !== false);
  }

  ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get('id');
      if (id) {
        this.isEditing = true;
        this.propostaData = this.propostaService.getPropostaById(+id);
      }
  }

  saveProposta(formData: any): void {
    const itensOrcamento = this.orcamentoService.getItens();
    const resumo = this.orcamentoService.getResumoOrcamento();
    
    // Aqui você pode integrar os dados do formulário com os itens do orçamento
    const propostaCompleta = {
      ...formData,
      itens: itensOrcamento,
      valorTotal: resumo.pipe(map(r => r.valorTotal))
    };
    
    console.log('Salvando proposta com itens:', propostaCompleta);
    
    // Implementar salvamento real aqui
    // this.propostaService.save(propostaCompleta).subscribe(() => {
    //   this.router.navigate(['/propostas']);
    // });
  }

  cancel(): void {
    this.orcamentoService.limparOrcamento();
    this.router.navigate(['/propostas']);
  }
}
