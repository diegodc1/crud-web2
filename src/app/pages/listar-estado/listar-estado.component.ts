import { Component, OnInit, ViewChild } from '@angular/core';
import { Estado } from '../../shared/models/estado.model';
import { NgForm } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { EstadoService } from '../../services/estado.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listar-estado',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './listar-estado.component.html',
  styleUrl: './listar-estado.component.css',
})
export class ListarEstadoComponent implements OnInit {
  title = 'Lista de Estados';
  estados: Estado[] = [];

  constructor(private router: Router, private estadoService: EstadoService) {}

  ngOnInit(): void {
    this.estados = this.listarTodos();
  }

  listarTodos(): Estado[] {
    return this.estadoService.listarTodos();
  }

  remover($event: any, estado: Estado): void {
    $event.preventDefault();
    if (confirm(`Deseja realmente remover o estado ${estado.nome}?`)) {
      this.estadoService.remover(estado.id!);
      this.estados = this.listarTodos();
    }
  }
}
