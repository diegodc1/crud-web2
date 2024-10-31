import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Cidade } from '../../shared/models/cidade.model';
import { CidadeService } from '../../services/cidade.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inserir-cidade',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './inserir-cidade.component.html',
  styleUrl: './inserir-cidade.component.css',
})
export class InserirCidadeComponent {
  @ViewChild('formCidade') formCidade!: NgForm;
  cidade: Cidade = new Cidade();

  constructor(private router: Router, private cidadeService: CidadeService) {}

  inserir(): void {
    if (this.formCidade.form.valid) {
      this.cidadeService.inserir(this.cidade);
      this.router.navigate(['/cidades']);
    }
  }
}
