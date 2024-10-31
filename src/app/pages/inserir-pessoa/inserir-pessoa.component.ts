import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Pessoa } from '../../shared/models/pessoa.model';
import { PessoaService } from '../../services/pessoa.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inserir-pessoa',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './inserir-pessoa.component.html',
  styleUrl: './inserir-pessoa.component.css',
})
export class InserirPessoaComponent {
  @ViewChild('formPessoa') formPessoa!: NgForm;
  pessoa: Pessoa = new Pessoa();

  constructor(private pessoaService: PessoaService, private router: Router) {}

  inserir(): void {
    if (this.formPessoa.form.valid) {
      this.pessoaService.inserir(this.pessoa);
      this.router.navigate(['/pessoas']);
    }
  }
}
