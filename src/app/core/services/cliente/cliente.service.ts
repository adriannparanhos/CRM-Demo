import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../../../pages/cliente/models/cliente';
import { Observable, of, delay } from 'rxjs';

const MOCK_CLIENTES: Cliente[] = [
  { id: 1, razaoSocial: 'Empresa 1', cnpjCpf: '12345678901234', cidadeUf: 'Cidade 1/UF 1', email: 'empresa1@example.com', telefone: '123456789' },
  { id: 2, razaoSocial: 'Empresa 2', cnpjCpf: '23456789012345', cidadeUf: 'Cidade 2/UF 2', email: 'empresa2@example.com', telefone: '123456789' },
  { id: 3, razaoSocial: 'Empresa 3', cnpjCpf: '34567890123456', cidadeUf: 'Cidade 3/UF 3', email: 'empresa3@example.com', telefone: '123456789' },
  { id: 4, razaoSocial: 'Empresa 4', cnpjCpf: '45678901234567', cidadeUf: 'Cidade 4/UF 4', email: 'empresa4@example.com', telefone: '123456789' },
  { id: 5, razaoSocial: 'Empresa 5', cnpjCpf: '56789012345678', cidadeUf: 'Cidade 5/UF 5', email: 'empresa5@example.com', telefone: '987654321' },
]

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Cliente[]> {
    console.log('ClienteService: Buscando todos os clientes (mockado).');
    return of(MOCK_CLIENTES).pipe(delay(500));
  }

  search(query: string): Observable<Cliente[]> {
    console.log('ClienteService: Buscando clientes por query (mockado).');
    return of(MOCK_CLIENTES).pipe(delay(500));
  }

  delete(id: number): Observable<void> {
    console.log('ClienteService: Excluindo cliente (mockado).');
    return of(void 0).pipe(delay(500));
  }
}
