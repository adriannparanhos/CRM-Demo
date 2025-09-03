import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produto } from '../../../pages/produto/models/Produto';
import { Observable, of, delay } from 'rxjs';

function initializeProdutos(): Produto[] {
  const savedProdutos = localStorage.getItem('produtos');
  if (savedProdutos) {
    return JSON.parse(savedProdutos);
  }
  return [
    { id: 1, nome: 'Produto 1', ncm: '123456', aliquota: 10, preco: 100, quantidade: 100, categoria: 'Categoria 1' },
    { id: 2, nome: 'Produto 2', ncm: '123457', aliquota: 9,  preco: 200, quantidade: 200, categoria: 'Categoria 2' },
    { id: 3, nome: 'Produto 3', ncm: '123458', aliquota: 8,  preco: 300, quantidade: 300, categoria: 'Categoria 3' },
    { id: 4, nome: 'Produto 4', ncm: '123459', aliquota: 7,  preco: 400, quantidade: 400, categoria: 'Categoria 4' },
    { id: 5, nome: 'Produto 5', ncm: '123460', aliquota: 6,  preco: 500, quantidade: 500, categoria: 'Categoria 5' },
  ];
}

var MOCK_PRODUTOS: Produto[] = initializeProdutos();

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  
  constructor(private http: HttpClient) { }

  getAll(): Observable<Produto[]> {
    console.log('ProdutoService: buscando todos os produtos (mockado)', MOCK_PRODUTOS);
    return of(MOCK_PRODUTOS).pipe(delay(500));
  }

  search(query: string): Observable<Produto[]> {
    console.log('ProdutoService: buscando produtos por query (mockado)');
    return of(MOCK_PRODUTOS).pipe(delay(500));
  }

  add(produto: Produto): Observable<Produto> {
    MOCK_PRODUTOS.push(produto);
    produto.id = MOCK_PRODUTOS.length;
    localStorage.setItem('produtos', JSON.stringify(MOCK_PRODUTOS));
    return of(produto).pipe(delay(500));
  }

  delete(id: number): Observable<void> {
    console.log('ProdutoService: excluindo produto (mockado)');
    const index = MOCK_PRODUTOS.findIndex(p => p.id === id);
    if (index !== -1) {
      MOCK_PRODUTOS.splice(index, 1);
      localStorage.setItem('produtos', JSON.stringify(MOCK_PRODUTOS));
    }
    return of(void 0).pipe(delay(500));
  }
}
