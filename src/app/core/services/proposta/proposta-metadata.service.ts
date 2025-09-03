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
        validators: [Validators.required]
      },
      {
        key: 'cliente',
        label: 'Cliente',
        type: 'text',
        isFormField: true,
        isTableColumn: true,
        validators: [Validators.required]
      },
      {
        key: 'nomeContato',
        label: 'Nome do Contato',
        type: 'text',
        isFormField: true,
        isTableColumn: false,
        validators: [Validators.required]
      },
      {
        key: 'telefone',
        label: 'Telefone',
        type: 'text',
        isFormField: true,
        isTableColumn: false,
        placeholder: '(11) 99999-9999',
        validators: [Validators.required]
      },
      {
        key: 'email',
        label: 'E-mail',
        type: 'email',
        isFormField: true,
        isTableColumn: false,
        placeholder: 'contato@empresa.com',
        validators: [Validators.required, Validators.email]
      },
      {
        key: 'endereco',
        label: 'Endereço',
        type: 'text',
        isFormField: true,
        isTableColumn: false,
        validators: [Validators.required]
      },
      {
        key: 'cidade',
        label: 'Cidade',
        type: 'text',
        isFormField: true,
        isTableColumn: false,
        validators: [Validators.required]
      },
      {
        key: 'cep',
        label: 'CEP',
        type: 'text',
        isFormField: true,
        isTableColumn: false,
        placeholder: '00000-000',
        validators: [Validators.required]
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
