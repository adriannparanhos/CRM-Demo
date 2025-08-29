import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormDef } from '../../../shared/components/resource-form/models/FormDef';

@Injectable({
  providedIn: 'root'
})
export class PropostaMetadataService {

  constructor() { }

  getFields(): FormDef[] {
    return [
      {
        key: 'id',
        label: 'ID',
        type: 'text',
        isFormField: false,
        isTableColumn: true,
      },
      {
        key: 'proposta',
        label: 'Proposta',
        type: 'text',
        isFormField: true,
        isTableColumn: true,
      },
      {
        key: 'cliente',
        label: 'Cliente',
        type: 'text',
        isFormField: true,
        isTableColumn: true,
      },
      {
        key: 'data',
        label: 'Data',
        type: 'date',
        isFormField: true,
        isTableColumn: true,
      },
      {
        key: 'valor',
        label: 'Valor',
        type: 'currency',
        isFormField: true,
        isTableColumn: true,
      },
      {
        key: 'status',
        label: 'Status',
        type: 'status',
        isFormField: true,
        isTableColumn: true,
      },
      {
        key: 'observacoes',
        label: 'Observações',
        type: 'text',
        isFormField: true,
        isTableColumn: true,
      },
      {
        key: 'createdAt',
        label: 'Criado em',
        type: 'text',
        isFormField: false,
        isTableColumn: true,
      }
    ]
  }
}
