import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Cliente } from '../models/cliente';
import { ColumnDef } from '../../../shared/components/resource-table/models/ColumnDef';
import { ActionDef } from '../../../shared/components/resource-table/models/ActionDef';
import { ClienteService } from '../../../core/services/cliente/cliente.service';
import { Router } from '@angular/router';
import { ResourceTableComponent } from '../../../shared/components/resource-table/resource-table.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cliente-page',
  imports: [ResourceTableComponent, CommonModule],
  templateUrl: './cliente-page.component.html',
  styleUrl: './cliente-page.component.scss'
})
export class ClientePageComponent implements OnInit, OnDestroy {
  cliente$: Observable<Cliente[]> = of([]);

  columns: ColumnDef[] = [
    { key: 'razaoSocial', label: 'Razão Social' },
    { key: 'cnpjCpf', label: 'CNPJ/CPF' },
    { key: 'cidadeUf', label: 'Cidade/UF' },
  ];

  actions: ActionDef[] = [
    { id: 'edit', icon: 'pencil', label: 'Editar', colorClass: 'edit-icon' },
    { id: 'delete', icon: 'trash', label: 'Excluir', colorClass: 'delete-icon' },
  ]

  constructor(private clienteService: ClienteService, private router: Router) { }

  ngOnInit(): void {
    this.cliente$ = this.clienteService.getAll();
  }

  ngOnDestroy(): void {
    this.cliente$ = of([]);
  }

  handleSearch(query: string) {
    this.cliente$ = this.clienteService.search(query);
  }

  handleNewCliente() {
    this.router.navigate(['/cliente/new']);
  }

  // Tambem é possivel definir as rotas diretamente no action, testar depois
  handleAction(event: { actionId: string, item: Cliente }) {
    switch (event.actionId) {
      case 'edit':
        this.router.navigate(['/cliente', event.item.id]);
        break;
      case 'delete':
        this.clienteService.delete(event.item.id).subscribe(() => {
          this.cliente$ = this.clienteService.getAll();
        });
        break;
    }
  }
}
