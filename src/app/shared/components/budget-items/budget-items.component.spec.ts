import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BudgetItemsComponent } from './budget-items.component';
import { OrcamentoService } from '../../../core/services/proposta/orcamento.service';
import { ProdutoService } from '../../../core/services/produto/produto.service';
import { of } from 'rxjs';

describe('BudgetItemsComponent', () => {
  let component: BudgetItemsComponent;
  let fixture: ComponentFixture<BudgetItemsComponent>;
  let mockOrcamentoService: jasmine.SpyObj<OrcamentoService>;
  let mockProdutoService: jasmine.SpyObj<ProdutoService>;

  beforeEach(async () => {
    const orcamentoServiceSpy = jasmine.createSpyObj('OrcamentoService', [
      'getProdutosPorCategoria',
      'adicionarItem',
      'removerItem',
      'atualizarQuantidade',
      'atualizarDesconto',
      'limparOrcamento'
    ], {
      itens$: of([]),
      getResumoOrcamento: () => of({ subtotal: 0, descontoTotal: 0, valorTotal: 0, quantidadeItens: 0 })
    });

    const produtoServiceSpy = jasmine.createSpyObj('ProdutoService', ['getAll']);

    await TestBed.configureTestingModule({
      imports: [BudgetItemsComponent],
      providers: [
        { provide: OrcamentoService, useValue: orcamentoServiceSpy },
        { provide: ProdutoService, useValue: produtoServiceSpy }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BudgetItemsComponent);
    component = fixture.componentInstance;
    mockOrcamentoService = TestBed.inject(OrcamentoService) as jasmine.SpyObj<OrcamentoService>;
    mockProdutoService = TestBed.inject(ProdutoService) as jasmine.SpyObj<ProdutoService>;

    // Setup default return values
    mockOrcamentoService.getProdutosPorCategoria.and.returnValue(of([]));
    mockOrcamentoService.getResumoOrcamento.and.returnValue(of({
      subtotal: 0,
      descontoTotal: 0,
      valorTotal: 0,
      quantidadeItens: 0
    }));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle categoria expansion', () => {
    const categoria = 'Categoria Teste';
    
    expect(component.isCategoriaExpandida(categoria)).toBeFalse();
    
    component.toggleCategoria(categoria);
    expect(component.isCategoriaExpandida(categoria)).toBeTrue();
    
    component.toggleCategoria(categoria);
    expect(component.isCategoriaExpandida(categoria)).toBeFalse();
  });

  it('should call orcamentoService.adicionarItem when adding product', () => {
    const mockProduto = {
      id: 1,
      nome: 'Produto Teste',
      ncm: '123456',
      aliquota: 10,
      preco: 100,
      quantidade: 50,
      categoria: 'Categoria Teste'
    };

    component.adicionarProduto(mockProduto);
    
    expect(mockOrcamentoService.adicionarItem).toHaveBeenCalledWith(mockProduto, 1);
  });

  it('should format currency correctly', () => {
    const valor = 1234.56;
    const formatted = component.formatarMoeda(valor);
    
    expect(formatted).toBe('R$ 1.234,56');
  });

  it('should call limparOrcamento when clearing budget', () => {
    component.limparOrcamento();
    
    expect(mockOrcamentoService.limparOrcamento).toHaveBeenCalled();
  });
});