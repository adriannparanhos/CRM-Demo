import { Component, OnInit } from '@angular/core';
import { FormDef } from '../../../../shared/components/resource-form/models/FormDef';
import { Proposta } from '../../models/Proposta';
import { FormBuilder } from '@angular/forms';
import { PropostaMetadataService } from '../../../../core/services/proposta/proposta-metadata.service';
import { ActivatedRoute } from '@angular/router';
import { PropostaService } from '../../../../core/services/proposta/proposta.service';  
import { ResourceFormComponent } from '../../../../shared/components/resource-form/resource-form.component';

@Component({
  selector: 'app-add-new-proposta-page',
  imports: [ResourceFormComponent],
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
    private propostaService: PropostaService
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

  }

  cancel(): void {
  }
}
