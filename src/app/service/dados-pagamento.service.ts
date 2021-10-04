import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseURL } from '../shared/baseurl';
import { ContaPagar } from '../shared/conta-pagar';

@Injectable({
  providedIn: 'root'
})
export class DadosPagamentoService {

  constructor(private http: HttpClient) { }

  submitDadosPagamento(contaPagar: ContaPagar): Observable<ContaPagar> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post<ContaPagar>(baseURL + '/api/contas-pagar/inserir', contaPagar, httpOptions);
  }

  obterPagamento(): Observable<any> {
    return this.http.get<ContaPagar>(baseURL + '/api/contas-pagar/pagamentos');
  }

}
