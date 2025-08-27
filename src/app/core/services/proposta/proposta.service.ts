import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Proposta } from '../../../pages/proposta/models/Proposta';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PropostaService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Proposta[]> {
    return this.http.get<Proposta[]>('http://localhost:3000/propostas');
  }

  search(query: string): Observable<Proposta[]> {
    return this.http.get<Proposta[]>(`http://localhost:3000/propostas?razaoSocial=${query}`);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`http://localhost:3000/propostas/${id}`);
  }

}
