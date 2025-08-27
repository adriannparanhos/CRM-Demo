import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Proposta } from '../models/Proposta';
import { ColumnDef, ActionDef } from '../../../shared/components/resource-table/resource-table.component';
import { PropostaService } from '../../../core/services/proposta/proposta.service';
import { Router } from '@angular/router';
import { ResourceTableComponent } from '../../../shared/components/resource-table/resource-table.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-proposta-page',
  imports: [ResourceTableComponent, CommonModule],
  templateUrl: './proposta-page.component.html',
  styleUrl: './proposta-page.component.scss'
})
export class PropostaPageComponent implements OnInit {
  propostas$: Observable<Proposta[]> = of([]);

  columns: ColumnDef[] = [
    { key: 'numeroPropsota', label: 'Número Proposta' },
    { key: 'razaoSocial', label: 'Razão Social' },
    { key: 'data', label: 'Data', type: 'date' },
    { key: 'valor', label: 'Valor', type: 'currency' },
    { key: 'status', label: 'Status' },
  ];

  actions: ActionDef[] = [
    { id: 'view', icon: 'eye', label: 'Visualizar', colorClass: 'text-blue-500' },
    { id: 'edit', icon: 'edit', label: 'Editar', colorClass: 'bg-yellow-500' },
    { id: 'delete', icon: 'trash', label: 'Excluir', colorClass: 'bg-red-500' },
  ];

  constructor(
    private propostaService: PropostaService,
    private router: Router ) {

  }


  ngOnInit(): void {
    this.propostas$ = this.propostaService.getAll();
  }

  handleSearch(query: string) {
    this.propostas$ = this.propostaService.search(query);
  }

  handleNewProposta() {
    this.router.navigate(['/propostas/novo']);
  }

  handleAction(event: { actionId: string, item: Proposta }) {
    switch (event.actionId) {
      case 'view':
        this.router.navigate(['/propostas', event.item.id]);
        break;
      case 'edit':
        this.router.navigate(['/propostas', event.item.id, 'editar']);
        break;
      case 'delete':
        this.propostaService.delete(event.item.id).subscribe(() => {
          this.propostas$ = this.propostaService.getAll();
        });
        break;
    }
  }
}
