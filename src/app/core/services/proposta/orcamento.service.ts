import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { ItemOrcamento, OrcamentoResumo, ProdutosPorCategoria } from '../../../pages/proposta/models/ItemOrcamento';
import { Produto } from '../../../pages/produto/models/Produto';
import { ProdutoService } from '../produto/produto.service';

@Injectable({
  providedIn: 'root'
})
export class OrcamentoService {
  private itensSubject = new BehaviorSubject<ItemOrcamento[]>([]);
  public itens$ = this.itensSubject.asObservable();

  constructor(private produtoService: ProdutoService) {}

  getProdutosPorCategoria(): Observable<ProdutosPorCategoria[]> {
    return this.produtoService.getAll().pipe(
      map(produtos => {
        const categorias = new Map<string, Produto[]>();
        
        produtos.forEach(produto => {
          if (!categorias.has(produto.categoria)) {
            categorias.set(produto.categoria, []);
          }
          categorias.get(produto.categoria)!.push(produto);
        });

        return Array.from(categorias.entries()).map(([categoria, produtos]) => ({
          categoria,
          produtos: produtos.sort((a, b) => a.nome.localeCompare(b.nome))
        })).sort((a, b) => a.categoria.localeCompare(b.categoria));
      })
    );
  }

  adicionarItem(produto: Produto, quantidade: number = 1): void {
    const itensAtuais = this.itensSubject.value;
    const itemExistente = itensAtuais.find(item => item.produto.id === produto.id);

    if (itemExistente) {
      this.atualizarQuantidade(itemExistente.id, itemExistente.quantidade + quantidade);
    } else {
      const novoItem: ItemOrcamento = {
        id: this.gerarId(),
        produto,
        quantidade,
        valorUnitario: produto.preco,
        valorTotal: produto.preco * quantidade,
        desconto: 0
      };
      
      this.itensSubject.next([...itensAtuais, novoItem]);
    }
  }

  removerItem(itemId: string): void {
    const itensAtuais = this.itensSubject.value;
    const novosItens = itensAtuais.filter(item => item.id !== itemId);
    this.itensSubject.next(novosItens);
  }

  atualizarQuantidade(itemId: string, novaQuantidade: number): void {
    if (novaQuantidade <= 0) {
      this.removerItem(itemId);
      return;
    }

    const itensAtuais = this.itensSubject.value;
    const novosItens = itensAtuais.map(item => {
      if (item.id === itemId) {
        return {
          ...item,
          quantidade: novaQuantidade,
          valorTotal: this.calcularValorTotal(item.valorUnitario, novaQuantidade, item.desconto || 0)
        };
      }
      return item;
    });
    
    this.itensSubject.next(novosItens);
  }

  atualizarDesconto(itemId: string, desconto: number): void {
    const itensAtuais = this.itensSubject.value;
    const novosItens = itensAtuais.map(item => {
      if (item.id === itemId) {
        return {
          ...item,
          desconto,
          valorTotal: this.calcularValorTotal(item.valorUnitario, item.quantidade, desconto)
        };
      }
      return item;
    });
    
    this.itensSubject.next(novosItens);
  }

  getResumoOrcamento(): Observable<OrcamentoResumo> {
    return this.itens$.pipe(
      map(itens => {
        const subtotal = itens.reduce((acc, item) => acc + (item.valorUnitario * item.quantidade), 0);
        const descontoTotal = itens.reduce((acc, item) => {
          const descontoItem = (item.desconto || 0) * item.quantidade;
          return acc + descontoItem;
        }, 0);
        const valorTotal = subtotal - descontoTotal;
        const quantidadeItens = itens.reduce((acc, item) => acc + item.quantidade, 0);

        return {
          subtotal,
          descontoTotal,
          valorTotal,
          quantidadeItens
        };
      })
    );
  }

  limparOrcamento(): void {
    this.itensSubject.next([]);
  }

  getItens(): ItemOrcamento[] {
    return this.itensSubject.value;
  }

  private calcularValorTotal(valorUnitario: number, quantidade: number, desconto: number = 0): number {
    return (valorUnitario * quantidade) - (desconto * quantidade);
  }

  private gerarId(): string {
    return Date.now().toString() + Math.random().toString(36).substr(2, 9);
  }
}