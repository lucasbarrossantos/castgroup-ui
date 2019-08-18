import { Funcionario } from './../shared/model/funcionario.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/internal/operators/map';
import * as moment from 'moment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  public resourceUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  findById(id: number): Observable<any> {
    return this.http
      .get<Funcionario>(`${this.resourceUrl}/funcionario/${id}`,
        {observe: 'response' }).pipe(map((res: any) => this.convertDateFromServer(res)));
  }

  protected convertDateFromServer(res: any): any {
    if (res.body) {

      if (res.body.dataDeNascimento) {
        res.body.dataDeNascimento = res.body.dataDeNascimento != null ?
          moment(res.body.dataDeNascimento, 'YYYY-MM-DD').toDate() : null;
      }

      if (res.body.dataDeContratacao) {
        res.body.dataDeContratacao = res.body.dataDeContratacao != null ?
          moment(res.body.dataDeContratacao, 'YYYY-MM-DD').toDate() : null;
      }
    }
    return res;
  }

}
