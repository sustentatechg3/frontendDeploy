import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { OrderModule } from 'ngx-order-pipe';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { ContatoComponent } from './contato/contato.component';
import { CadastrarComponent } from './cadastrar/cadastrar-usuario/cadastrar-usuario.component';
import { EntrarComponent } from './entrar/entrar.component';
import { InicioComponent } from './inicio/inicio.component';
import { EquipeComponent } from './equipe/equipe.component';
import { CadastrarProdutoComponent } from './cadastrar/cadastrar-produto/cadastrar-produto.component';
import { CadastrarCategoriaComponent } from './cadastrar/cadastrar-categoria/cadastrar-categoria.component';
import { CategoriaEditComponent } from './edit/categoria-edit/categoria-edit.component';
import { ProdutoEditComponent } from './edit/produto-edit/produto-edit.component';
import { ProdutoDeleteComponent } from './delete/produto-delete/produto-delete.component';
import { CategoriaDeleteComponent } from './delete/categoria-delete/categoria-delete.component';
import { HeaderComponent } from './header/header.component';
import { ProdutoSelecaoComponent } from './produto-selecao/produto-selecao.component';
import { NavbarNavegacaoComponent } from './navbar-navegacao/navbar-navegacao.component';
import { UsuarioEditComponent } from './edit/usuario-edit/usuario-edit.component';
import { AuthService } from './service/auth.service';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { ProdutosBuscadosComponent } from './produtos-buscados/produtos-buscados.component';
import { ArmazenarComponent } from './armazenar/armazenar.component';
import { RecepcaoComponent } from './recepcao/recepcao.component';
import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, } from '@angular/core';
import { AlertaComponent } from './alerta/alerta.component';
import { ModalModule } from 'ngx-bootstrap/modal';


registerLocaleData(ptBr);
// **************************************************


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    NavbarNavegacaoComponent,
    RodapeComponent,
    ContatoComponent,
    CadastrarComponent,
    EntrarComponent,
    InicioComponent,
    EquipeComponent,
    CadastrarProdutoComponent,
    CadastrarCategoriaComponent,
    CategoriaEditComponent,
    ProdutoEditComponent,
    ProdutoDeleteComponent,
    CategoriaDeleteComponent,
    HeaderComponent,
    ProdutoSelecaoComponent,
    UsuarioEditComponent,
    CarrinhoComponent,
    ProdutosBuscadosComponent,
    ArmazenarComponent,
    RecepcaoComponent,
    AlertaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ModalModule.forRoot(),
    // OrderModule

  ],
  providers: [

    // *************************************************
    //formatar saída monetária R$
    { provide: LOCALE_ID, useValue: 'pt' },
    // *************************************************
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' },
    // *************************************************
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
