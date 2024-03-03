import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
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
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    FuncionarioComponent,
    EquipamentoComponent,
    InventarioComponent,
    CadastrarFuncionarioComponent,
    EditarFuncionarioComponent,
    ExcluirFuncionarioComponent,
    CadastrarEquipamentoComponent,
    EditarEquipamentoComponent,
    ExcluirEquipamentoComponent,
    CadastrarInventarioComponent,
    EditarInventarioComponent,
    ExcluirInventarioComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
