import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Cliente } from '../../models/cliente';
import { ClienteMetadataService } from '../../../../core/services/cliente/cliente-metadata.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ResourceFormComponent } from '../../../../shared/components/resource-form/resource-form.component';
import { FormDef } from '../../../../shared/components/resource-form/models/FormDef';
import { ClienteService } from '../../../../core/services/cliente/cliente.service';

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
    private clienteService: ClienteService,
    private clienteMetadataService: ClienteMetadataService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.formFields = this.clienteMetadataService.getFields()
      .filter(field => field.isFormField !== false);
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditing = true;
    }
  }

  saveCliente(formData: any): void {
    if (this.isEditing) {
      this.adicionarNovoCliente(formData);
    } else {
      this.adicionarNovoCliente(formData);
    }
    this.router.navigate(['/clientes']);
  }

  cancel(): void {
    this.router.navigate(['/clientes']);
  }

  adicionarNovoCliente(formData: any): void {
    this.clienteService.add(formData).subscribe(() => {
      this.router.navigate(['/clientes']);
    });
  }

  deleteCliente(formData: any): void {
    this.clienteService.delete(formData.id).subscribe(() => {
      this.router.navigate(['/clientes']);
    });
  }
}
