import { CommonModule, NgFor } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Pessoa } from '../../shared/models/pessoa.model';
import { PessoaService } from '../../services/pessoa.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-editar-pessoa',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './editar-pessoa.component.html',
  styleUrl: './editar-pessoa.component.css',
})
export class EditarPessoaComponent implements OnInit {
  @ViewChild('formPessoa') formPessoa!: NgForm;
  pessoa: Pessoa = new Pessoa();

  constructor(
    private pessoaService: PessoaService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    let id = +this.route.snapshot.params['id'];
    const res = this.pessoaService.buscarPorId(id);
    if (res !== undefined) this.pessoa = res;
    else throw new Error('Pessoa não encontrada: id = ' + id);
  }

  atualizar(): void {
    if (this.formPessoa.form.valid) {
      this.pessoaService.atualizar(this.pessoa);
      this.router.navigate(['/pessoas']);
    }
  }
}
