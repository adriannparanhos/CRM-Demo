import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Cliente } from '../../models/cliente';
import { ClienteMetadataService } from '../../../../core/services/cliente/cliente-metadata.service';
import { ActivatedRoute } from '@angular/router';
import { ResourceFormComponent } from '../../../../shared/components/resource-form/resource-form.component';
import { FormDef } from '../../../../shared/components/resource-form/models/FormDef';

@Component({
  selector: 'app-add-new-cliente-page',
  standalone: true,
  imports: [ResourceFormComponent],
  templateUrl: './add-new-cliente-page.component.html',
  styleUrls: ['./add-new-cliente-page.component.scss']
})
export class AddNewClientePageComponent implements OnInit {
  formFields: FormDef[];
  clienteData: Cliente | null = null;
  isEditing: boolean = false;

  constructor(
    private fb: FormBuilder, 
    private clienteMetadataService: ClienteMetadataService,
    private route: ActivatedRoute
  ) {
    this.formFields = this.clienteMetadataService.getFields()
      .filter(field => field.isFormField !== false);
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
    }
  }

  saveCliente(formData: any): void {
  }

  cancel(): void {
  }
}
