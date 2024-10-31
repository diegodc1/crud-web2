import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Estado } from '../../shared/models/estado.model';
import { EstadoService } from '../../services/estado.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-editar-estado',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './editar-estado.component.html',
  styleUrl: './editar-estado.component.css',
})
export class EditarEstadoComponent implements OnInit {
  @ViewChild('formEstado') formEstado!: NgForm;
  estado: Estado = new Estado();

  constructor(
    private estadoService: EstadoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    let id = +this.route.snapshot.params['id'];
    const res = this.estadoService.buscarPorId(id);
    if (res !== undefined) this.estado = res;
    else throw new Error('Estado não encontrado: id = ' + id);
  }

  atualizar(): void {
    if (this.formEstado.form.valid) {
      this.estadoService.atualizar(this.estado);
      this.router.navigate(['/estados']);
    }
  }
}
