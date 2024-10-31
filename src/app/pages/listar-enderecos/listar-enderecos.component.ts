import { Component, OnInit } from '@angular/core';
import { EnderecoService } from '../../services/endereco.service';
import { Endereco } from '../../shared/models/endereco.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-listar-enderecos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './listar-enderecos.component.html',
  styleUrl: './listar-enderecos.component.css',
})
export class ListarEnderecosComponent implements OnInit {
  enderecos: Endereco[] = [];
  constructor(
    private enderecoService: EnderecoService,
    private router: RouterModule
  ) {}

  ngOnInit(): void {
    this.enderecos = this.enderecoService.listarTodos();
  }

  listarTodos(): Endereco[] {
    return this.enderecoService.listarTodos();
  }

  remover($event: any, endereco: Endereco): void {
    $event.preventDefault();
    if (confirm(`Deseja realmente remover o endereco ${endereco.rua}?`)) {
      this.enderecoService.remover(endereco.id!);
      this.enderecos = this.listarTodos();
    }
  }
}
