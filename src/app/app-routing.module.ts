import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FuncionarioComponent } from './pages/funcionario/funcionario.component';
import { EquipamentoComponent } from './pages/equipamento/equipamento.component';
import { InventarioComponent } from './pages/inventario/inventario.component';
import { CadastrarFuncionarioComponent } from './pages/funcionario/cadastrar-funcionario/cadastrar-funcionario.component';
import { EditarFuncionarioComponent } from './pages/funcionario/editar-funcionario/editar-funcionario.component';
import { ExcluirFuncionarioComponent } from './pages/funcionario/excluir-funcionario/excluir-funcionario.component';
import { CadastrarEquipamentoComponent } from './pages/equipamento/cadastrar-equipamento/cadastrar-equipamento.component';
import { EditarEquipamentoComponent } from './pages/equipamento/editar-equipamento/editar-equipamento.component';
import { ExcluirEquipamentoComponent } from './pages/equipamento/excluir-equipamento/excluir-equipamento.component';
import { CadastrarInventarioComponent } from './pages/inventario/cadastrar-inventario/cadastrar-inventario.component';
import { EditarInventarioComponent } from './pages/inventario/editar-inventario/editar-inventario.component';
import { ExcluirInventarioComponent } from './pages/inventario/excluir-inventario/excluir-inventario.component';

const routes: Routes = [
{path:'home', component:HomeComponent},
{path:'funcionario', component:FuncionarioComponent},
{path:'computador',component:EquipamentoComponent},
{path:'invetario',component:InventarioComponent},
{path:'cadastrarfuncionario',component:CadastrarFuncionarioComponent},
{path:'editarfuncionario',component:EditarFuncionarioComponent},

{path:'excluirfuncionario',component:ExcluirFuncionarioComponent},
{path:'cadastrarequipamento',component:CadastrarEquipamentoComponent},
{path:'editarequipamento',component:EditarEquipamentoComponent},
{path:'excluirequipamento',component:ExcluirEquipamentoComponent},
{path:'cadastrarinventario',component:CadastrarInventarioComponent},
{path:'editarinventario',component:EditarInventarioComponent},
{path:'excluirinventario',component:ExcluirInventarioComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
