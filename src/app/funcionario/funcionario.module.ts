import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/components/card/card';
import { CalendarModule } from 'primeng/components/calendar/calendar';

import { FuncionarioDetalheComponent } from './funcionario-detalhe/funcionario-detalhe.component';
import { FuncionarioRoutingModule } from './funcionario.routing';

@NgModule({
  declarations: [FuncionarioDetalheComponent],
  imports: [
    CommonModule,
    FuncionarioRoutingModule,
    CardModule,
    FormsModule,
    CalendarModule
  ]
})
export class FuncionarioModule { }
