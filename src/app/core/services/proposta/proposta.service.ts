import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Proposta } from '../../../pages/proposta/models/Proposta';
import { Observable, of, delay } from 'rxjs';

const MOCK_PROPOSTAS: Proposta[] = [
  { id: 1, numeroPropsota: '25-08-028', razaoSocial: 'TES - TERMINAL EXPORTADOR DE SANTOS S.A', data: new Date('2025-08-26'), valor: 3694.58, status: 'Pendente' },
  { id: 2, numeroPropsota: '25-08-027', razaoSocial: 'LUHMA PECAS DIESEL LTDA', data: new Date('2025-08-25'), valor: 1207935.36, status: 'Aprovado' },
  { id: 3, numeroPropsota: '25-08-026', razaoSocial: 'LUHMA PECAS DIESEL LTDA', data: new Date('2025-08-22'), valor: 738867.14, status: 'Pendente' },
  { id: 4, numeroPropsota: '25-08-025', razaoSocial: 'T-GRAO TERMINAL DE GRANEIS S/A', data: new Date('2025-08-22'), valor: 436515.34, status: 'Rejeitado' },
  { id: 5, numeroPropsota: '25-08-024', razaoSocial: 'ACME CORPORATION', data: new Date('2025-08-20'), valor: 85000.00, status: 'Aprovado' },
];

@Injectable({
  providedIn: 'root'
})
export class PropostaService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Proposta[]> {
    console.log('PropostaService: Buscando todas as propostas (mockado).');
    return of(MOCK_PROPOSTAS).pipe(delay(500));
  }

  // getAll(): Observable<Proposta[]> {
  //   return this.http.get<Proposta[]>('http://localhost:3000/propostas');
  // }

  getPropostaById(id: number): Proposta | null {
    return MOCK_PROPOSTAS.find(proposta => proposta.id === id) || null;
  }

  search(query: string): Observable<Proposta[]> {
    return this.http.get<Proposta[]>(`http://localhost:3000/propostas?razaoSocial=${query}`);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`http://localhost:3000/propostas/${id}`);
  }

}
