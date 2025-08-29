import { Injectable } from '@angular/core';
import { FormDef } from '../../../shared/components/resource-form/models/FormDef';

@Injectable({
  providedIn: 'root'
})
export class ProdutoMetadataService {

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
        key: 'nome',
        label: 'Nome',
        type: 'text',
        isFormField: true,
        isTableColumn: true,
      },
      {
        key: 'ncm',
        label: 'NCM',
        type: 'text',
        isFormField: true,
        isTableColumn: true,
      },
      {
        key: 'aliquota',
        label: 'Aliquota',
        type: 'number',
        isFormField: true,
        isTableColumn: true,
      },
      {
        key: 'preco',
        label: 'Preco',
        type: 'number',
        isFormField: true,
        isTableColumn: true,
      },
      {
        key: 'quantidade',
        label: 'Quantidade',
        type: 'number',
        isFormField: true,
        isTableColumn: true,
      },
      {
        key: 'categoria',
        label: 'Categoria',
        type: 'text',
        isFormField: true,
        isTableColumn: true,
      },
    ];
  }
}
