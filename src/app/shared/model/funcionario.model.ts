import { Moment } from 'moment';

export class Funcionario {
  id?: number;
  nome?: string;
  dataDeNascimento?: Moment;
  dataDeContratacao?: Moment;

  endereco?: {
    rua?: string;
    numero?: string;
    complemento?: string;
    bairro?: string;
    cidade?: string;
    estado?: string;
  };

  equipe?: {
    id?: number;
  };
  matricula?: string;
}
