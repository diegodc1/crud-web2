import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Estado } from '../../shared/models/estado.model';
import { Router, RouterModule } from '@angular/router';
import { EstadoService } from '../../services/estado.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inserir-estado',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './inserir-estado.component.html',
  styleUrl: './inserir-estado.component.css',
})
export class InserirEstadoComponent {
  @ViewChild('formEstado') formEstado!: NgForm;
  estado: Estado = new Estado();

  constructor(private router: Router, private estadoService: EstadoService) {}

  inserir(): void {
    if (this.formEstado.form.valid) {
      this.estadoService.inserir(this.estado);
      this.router.navigate(['/estados']);
    }
  }
}
