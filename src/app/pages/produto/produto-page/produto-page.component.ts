import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Produto } from '../models/Produto';
import { ColumnDef } from '../../../shared/components/resource-table/models/ColumnDef';
import { ActionDef } from '../../../shared/components/resource-table/models/ActionDef';
import { ProdutoService } from '../../../core/services/produto/produto.service';
import { Router } from '@angular/router';
import { ResourceTableComponent } from '../../../shared/components/resource-table/resource-table.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-produto-page',
  imports: [ResourceTableComponent, CommonModule],
  templateUrl: './produto-page.component.html',
  styleUrl: './produto-page.component.scss'
})
export class ProdutoPageComponent implements OnInit, OnDestroy {
  produto$: Observable<Produto[]> = of([]);

  columns: ColumnDef[] = [
    { key: 'nome', label: 'Nome' },
    { key: 'ncm', label: 'NCM' },
    { key: 'aliquota', label: 'Aliquota' },
    { key: 'preco', label: 'Preco' },
    { key: 'quantidade', label: 'Quantidade' },
    { key: 'categoria', label: 'Categoria' },
  ]

  actions: ActionDef[] = [
    { id: 'edit', icon: 'pencil', label: 'Editar', colorClass: 'edit-icon' },
    { id: 'delete', icon: 'trash', label: 'Excluir', colorClass: 'delete-icon' },
  ]
  
  constructor(private produtoService: ProdutoService, private router: Router) {}

  ngOnInit(): void {
    this.produto$ = this.produtoService.getAll();
  }

  ngOnDestroy(): void {
    this.produtoService.delete(1).subscribe();
  }

  handleSearch(query: string) {
    this.produto$ = this.produtoService.search(query);
  }

  handleNewProduto() {
    this.router.navigate(['/produto/new']);
  }

  handleAction(event: { actionId: string, item: Produto }) {
    switch(event.actionId) {
      case 'edit':
        this.router.navigate(['/produto/editar', event.item.id]);
        break;
      case 'delete':
        this.produtoService.delete(event.item.id).subscribe(() => {
          this.produto$ = this.produtoService.getAll();
        });
        break;
    }
  }
}
