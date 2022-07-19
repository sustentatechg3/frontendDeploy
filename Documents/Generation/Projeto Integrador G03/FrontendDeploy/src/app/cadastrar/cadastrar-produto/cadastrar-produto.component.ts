import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/model/Categoria';
import { Produto } from 'src/app/model/Produto';
import { Usuario } from 'src/app/model/Usuario';
import { AlertasService } from 'src/app/service/alertas.service';
import { AuthService } from 'src/app/service/auth.service';
import { CategoriaService } from 'src/app/service/categoria.service';
import { ProdutoService } from 'src/app/service/produto.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.css']
})
export class CadastrarProdutoComponent implements OnInit {

  listaCategorias: Categoria[];
  listaProdutos: Produto[];
  listaUsuario: Usuario;

  produto: Produto = new Produto()
  idCategoria: number;
  categoria: Categoria = new Categoria();
  
  idFoto = environment.id;
  idUsuario = environment.id;
  usuario: Usuario = new Usuario();


  constructor(
    private router: Router,
    private categoriaService: CategoriaService,
    private produtoService: ProdutoService,
    private authService: AuthService,
    private alertas: AlertasService

  ) { }

  ngOnInit() {
    window.scroll(0, 0)

    if (environment.token == '')
      this.router.navigate(['/entrar'])

    this.findAllCategorias()
    this.findAllProdutos()
    this.produtosDoUsuario()

  }

  findByIdUsuario() {
    this.authService.getByIdUsuario(this.idUsuario).subscribe((resp: Usuario) => {
      this.usuario = resp
    })
  }

  findByIdCategoria() {
    this.categoriaService.getByIdCategoria(this.idCategoria).subscribe((resp: Categoria) => {
      this.categoria = resp
    })
  }


  findAllCategorias() {
    this.categoriaService.getAllCategorias().subscribe((resp: Categoria[]) => {
      this.listaCategorias = resp
    })
  }

  findAllProdutos() {
    this.produtoService.getAllProdutos().subscribe((obj: Produto[]) => {
      
    })
  }

  produtosDoUsuario(){
    this.authService.getByIdUsuario(this.idUsuario).subscribe((resp: Usuario)=> {
      this.listaUsuario = resp
    })
  }




  cadastrar() {
    this.categoria.id = this.idCategoria;
    this.produto.categoria = this.categoria;

    this.usuario.id = this.idUsuario;
    this.produto.usuario = this.usuario;

    this.produtoService.postProduto(this.produto).subscribe((resp: Produto) => {
      this.produto = resp;

      this.alertas.showAlertSuccess('Produto cadastrado com sucesso!');
      this.produto = new Produto();
      // this.findAllProdutos();
      this.produtosDoUsuario()
      
    })


  }



}