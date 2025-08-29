import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormDef } from '../../../shared/components/resource-form/models/FormDef';

@Injectable({
  providedIn: 'root'
})
export class ClienteMetadataService {

  constructor() { }

  getFields(): FormDef[] {
    return [
      { 
        key: 'id', 
        label: 'ID', 
        type: 'text', 
        isTableColumn: false, 
        isFormField: false    
      },
      { 
        key: 'razaoSocial', 
        label: 'Razão Social', 
        type: 'text',
        placeholder: 'Nome completo da empresa',
        validators: [Validators.required, Validators.minLength(3)]
      },
      { 
        key: 'cnpjCpf', 
        label: 'CNPJ - CPF', 
        type: 'text',
        placeholder: '00.000.000/0000-00',
        validators: [Validators.required] 
      },
      { 
        key: 'cidadeUf', 
        label: 'Cidade/UF', 
        type: 'text',
        placeholder: 'Sâu Paulo/SP',
        validators: [Validators.required]
      },
      { 
        key: 'email', 
        label: 'E-mail', 
        type: 'email',
        placeholder: 'email@dominio.com',
        validators: [Validators.required, Validators.email]
      },
      { 
        key: 'telefone', 
        label: 'Telefone', 
        type: 'text',
        placeholder: '(11) 99999-9999',
        validators: [Validators.required]
      }

    ];
  }
}