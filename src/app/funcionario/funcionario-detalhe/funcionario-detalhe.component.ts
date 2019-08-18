import { Funcionario } from './../../shared/model/funcionario.model';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-funcionario-detalhe',
  templateUrl: './funcionario-detalhe.component.html',
  styleUrls: ['./funcionario-detalhe.component.css']
})
export class FuncionarioDetalheComponent implements OnInit {
  funcionario: Funcionario;

  constructor(
    private title: Title,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.title.setTitle('Novo Funcionário');
    this.load();
  }

  load() {

    this.route.data.subscribe(({ funcionario }) => {
      this.funcionario = funcionario;

      if (funcionario.id) {
        this.title.setTitle('Funcionario ' + funcionario.nome);
      }
    }, (error) => console.log('error => ', error));

  }
}
