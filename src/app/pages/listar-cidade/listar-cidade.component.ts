import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CidadeService } from '../../services/cidade.service';
import { Cidade } from '../../shared/models/cidade.model';

@Component({
  selector: 'app-listar-cidade',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './listar-cidade.component.html',
  styleUrl: './listar-cidade.component.css',
})
export class ListarCidadeComponent implements OnInit {
  cidades: Cidade[] = [];

  constructor(
    private cidadeService: CidadeService,
    private router: RouterModule
  ) {}

  ngOnInit(): void {
    this.cidades = this.listarTodos();
  }

  listarTodos(): Cidade[] {
    return this.cidadeService.listarTodos();
  }

  remover($event: any, cidade: Cidade): void {
    $event.preventDefault();
    if (confirm(`Deseja realmente remover a cidade ${cidade.nome}?`)) {
      this.cidadeService.remover(cidade.id!);
      this.cidades = this.listarTodos();
    }
  }
}
