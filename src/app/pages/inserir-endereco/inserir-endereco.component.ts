import { CommonModule, NgFor } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Endereco } from '../../shared/models/endereco.model';
import { EnderecoService } from '../../services/endereco.service';

@Component({
  selector: 'app-inserir-endereco',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './inserir-endereco.component.html',
  styleUrl: './inserir-endereco.component.css',
})
export class InserirEnderecoComponent {
  @ViewChild('formEndereco') formEndereco!: NgForm;
  endereco: Endereco = new Endereco();

  constructor(
    private enderecoService: EnderecoService,
    private router: Router
  ) {}

  inserir(): void {
    if (this.formEndereco.form.valid) {
      this.enderecoService.inserir(this.endereco);
      this.router.navigate(['/enderecos/listar']);
    }
  }
}
