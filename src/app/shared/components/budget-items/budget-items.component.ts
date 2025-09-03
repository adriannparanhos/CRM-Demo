import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule } from 'lucide-angular';
import { Observable } from 'rxjs';
import { OrcamentoService } from '../../../core/services/proposta/orcamento.service';
import { ProdutoService } from '../../../core/services/produto/produto.service';
import { ItemOrcamento, OrcamentoResumo, ProdutosPorCategoria } from '../../../pages/proposta/models/ItemOrcamento';
import { Produto } from '../../../pages/produto/models/Produto';

@Component({
  selector: 'app-budget-items',
  imports: [CommonModule, FormsModule, LucideAngularModule],
  templateUrl: './budget-items.component.html',
  styleUrl: './budget-items.component.scss'
})
export class BudgetItemsComponent implements OnInit {
  @Input() showOnlyForm: boolean = false;
  @Input() showOnlyItems: boolean = false;
  
  categorias: string[] = [];
  produtosPorCategoria: ProdutosPorCategoria[] = [];
  produtosFiltrados: Produto[] = [];
  
  categoriaSelecionada: string = '';
  produtoSelecionado: Produto | null = null;
  quantidade: number = 1;
  desconto: number = 0;
  observacoes: string = '';
  
  itensOrcamento: ItemOrcamento[] = [];
  resumoOrcamento: OrcamentoResumo = {
    subtotal: 0,
    descontoTotal: 0,
    valorTotal: 0,
    quantidadeItens: 0
  };

  constructor(
    private orcamentoService: OrcamentoService,
    private produtoService: ProdutoService
  ) {}

  ngOnInit(): void {
    this.carregarDados();
    this.atualizarResumo();
  }

  private carregarDados(): void {
    this.orcamentoService.getProdutosPorCategoria().subscribe(categoriasPorProdutos => {
      this.produtosPorCategoria = categoriasPorProdutos;
      this.categorias = categoriasPorProdutos.map(grupo => grupo.categoria);
    });

    this.itensOrcamento = this.orcamentoService.getItens();
    
    this.orcamentoService.itens$.subscribe((itens: ItemOrcamento[]) => {
      this.itensOrcamento = itens;
      this.atualizarResumo();
    });
  }

  onCategoriaSelecionada(): void {
    if (this.categoriaSelecionada) {
      const categoriaEncontrada = this.produtosPorCategoria.find(
        grupo => grupo.categoria === this.categoriaSelecionada
      );
      this.produtosFiltrados = categoriaEncontrada ? categoriaEncontrada.produtos : [];
    } else {
      this.produtosFiltrados = [];
    }
    this.produtoSelecionado = null;
  }

  onProdutoSelecionado(): void {
    if (this.produtoSelecionado) {
      const produtoEncontrado = this.produtosFiltrados.find(
        produto => produto.id === this.produtoSelecionado?.id
      );
      this.produtosFiltrados = produtoEncontrado ? [produtoEncontrado] : [];
    } else {
      this.produtosFiltrados = [];
    }

  }

  adicionarItem(): void {
    if (this.produtoSelecionado && this.quantidade > 0) {
      this.orcamentoService.adicionarItem(
        this.produtoSelecionado,
        this.quantidade
      );
      
      if (this.desconto > 0) {
        const itens = this.orcamentoService.getItens();
        const ultimoItem = itens[itens.length - 1];
        if (ultimoItem) {
          this.orcamentoService.atualizarDesconto(ultimoItem.id, this.desconto);
        }
      }
      
      this.resetarFormulario();
    }
  }

  private resetarFormulario(): void {
    this.categoriaSelecionada = '';
    this.produtoSelecionado = null;
    this.produtosFiltrados = [];
    this.quantidade = 1;
    this.desconto = 0;
    this.observacoes = '';
  }

  removerItem(itemId: string): void {
    this.orcamentoService.removerItem(itemId);
  }

  atualizarQuantidade(itemId: string, quantidade: number): void {
    this.orcamentoService.atualizarQuantidade(itemId, quantidade);
  }

  atualizarDesconto(itemId: string, desconto: number): void {
    this.orcamentoService.atualizarDesconto(itemId, desconto);
  }

  limparOrcamento(): void {
    this.orcamentoService.limparOrcamento();
    this.resetarFormulario();
  }

  private atualizarResumo(): void {
    this.orcamentoService.getResumoOrcamento().subscribe(resumo => {
      this.resumoOrcamento = resumo;
    });
  }

  formatarMoeda(valor: number): string {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(valor);
  }

  getQuantidadeItemProduto(produtoId: number, itens: ItemOrcamento[]): number {
    const item = itens.find(item => item.produto.id === produtoId);
    return item ? item.quantidade : 0;
  }

  isProdutoAdicionado(produtoId: number, itens: ItemOrcamento[]): boolean {
    return itens.some(item => item.produto.id === produtoId);
  }
}