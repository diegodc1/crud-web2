import { Routes } from '@angular/router';
import { ListarPessoaComponent } from './pages/listar-pessoa/listar-pessoa.component';
import { InserirPessoaComponent } from './pages/inserir-pessoa/inserir-pessoa.component';
import { ListarEnderecosComponent } from './pages/listar-enderecos/listar-enderecos.component';
import { InserirEnderecoComponent } from './pages/inserir-endereco/inserir-endereco.component';
import { EditarEnderecoComponent } from './pages/editar-endereco/editar-endereco.component';
import { EditarPessoaComponent } from './pages/editar-pessoa/editar-pessoa.component';
import { ListarCidadeComponent } from './pages/listar-cidade/listar-cidade.component';
import { EditarCidadeComponent } from './pages/editar-cidade/editar-cidade.component';
import { InserirCidadeComponent } from './pages/inserir-cidade/inserir-cidade.component';
import { InserirEstadoComponent } from './pages/inserir-estado/inserir-estado.component';
import { ListarEstadoComponent } from './pages/listar-estado/listar-estado.component';
import { EditarEstadoComponent } from './pages/editar-estado/editar-estado.component';

export const routes: Routes = [
  { path: '', redirectTo: 'cidades/listar', pathMatch: 'full' },
  { path: 'pessoas', redirectTo: 'pessoas/listar' },
  { path: 'pessoas/listar', component: ListarPessoaComponent },
  { path: 'pessoas/novo', component: InserirPessoaComponent },
  { path: 'pessoas/editar/:id', component: EditarPessoaComponent },

  { path: 'enderecos', redirectTo: 'enderecos/listar' },
  { path: 'enderecos/listar', component: ListarEnderecosComponent },
  { path: 'enderecos/novo', component: InserirEnderecoComponent },
  { path: 'enderecos/editar/:id', component: EditarEnderecoComponent },

  { path: 'cidades', redirectTo: 'cidades/listar' },
  { path: 'cidades/listar', component: ListarCidadeComponent },
  { path: 'cidades/novo', component: InserirCidadeComponent },
  { path: 'cidades/editar/:id', component: EditarCidadeComponent },

  { path: 'estados', redirectTo: 'estados/listar' },
  { path: 'estados/listar', component: ListarEstadoComponent },
  { path: 'estados/novo', component: InserirEstadoComponent },
  { path: 'estados/editar/:id', component: EditarEstadoComponent },
];
