import { FuncionarioDetalheComponent } from './funcionario-detalhe/funcionario-detalhe.component';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpResponse } from '@angular/common/http';
import { Routes, ActivatedRouteSnapshot, Resolve, RouterModule } from '@angular/router';
import { Injectable, NgModule } from '@angular/core';
import { Funcionario } from '../shared/model/funcionario.model';
import { FuncionarioService } from './funcionario.service';

@Injectable({ providedIn: 'root' })
export class FuncionarioResolve implements Resolve<Funcionario> {

    constructor(private service: FuncionarioService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<Funcionario> {
        const id = route.params.id ? route.params.id : null;
        if (id) {
            return this.service.findById(id).pipe(
                map((funcionario: HttpResponse<Funcionario>) => funcionario.body)
            );
        }
        return of(new Funcionario());
    }
}

export const routes: Routes = [
    /* {
        path: '',
        component:
    },
    {
      path: 'nova',
      component:
      resolve: {
            funcionario:
        }
    }, */
    {
      path: ':id',
      component: FuncionarioDetalheComponent,
      resolve: {
            funcionario: FuncionarioResolve
        }
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [ RouterModule ]
  })
export class FuncionarioRoutingModule { }
