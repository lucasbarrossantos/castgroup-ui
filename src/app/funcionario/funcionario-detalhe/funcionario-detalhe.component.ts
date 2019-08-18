import { FuncionarioService } from './../funcionario.service';
import { Funcionario } from './../../shared/model/funcionario.model';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-funcionario-detalhe',
  templateUrl: './funcionario-detalhe.component.html',
  styleUrls: ['./funcionario-detalhe.component.css']
})
export class FuncionarioDetalheComponent implements OnInit {
  funcionario: Funcionario;

  pt = {
    firstDayOfWeek: 0,
    dayNames: [
      'Domingo',
      'Segunda',
      'Terça',
      'Quarta',
      'Quinta',
      'Sexta',
      'Sábado'
    ],
    dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
    dayNamesMin: ['Do', 'Se', 'Te', 'Qu', 'Qu', 'Se', 'Sa'],
    monthNames: [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro'
    ],
    monthNamesShort: [
      'Jan',
      'Fev',
      'Mar',
      'Abr',
      'Mai',
      'Jun',
      'Jul',
      'Ago',
      'Set',
      'Out',
      'Nov',
      'Dez'
    ],
    today: 'Hoje',
    clear: 'Limpar'
  };

  constructor(
    private funcionarioService: FuncionarioService,
    private title: Title,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit() {
    this.title.setTitle('Nova turma');
    this.load();
  }

  load() {

    this.route.data.subscribe(({ funcionario }) => {
      this.funcionario = funcionario;

      if (funcionario.id) {
        this.title.setTitle('Funcionario ' + funcionario.nome);
      }
    }, (error) => console.log('error => ', error));

    if (this.funcionario.id) {

    }

  }
}
