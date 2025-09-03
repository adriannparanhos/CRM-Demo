import { Produto } from '../../produto/models/Produto';

export interface ItemOrcamento {
    id: string;
    produto: Produto;
    quantidade: number;
    valorUnitario: number;
    valorTotal: number;
    desconto?: number;
    observacoes?: string;
}

export interface OrcamentoResumo {
    subtotal: number;
    descontoTotal: number;
    valorTotal: number;
    quantidadeItens: number;
}

export interface ProdutosPorCategoria {
    categoria: string;
    produtos: Produto[];
}