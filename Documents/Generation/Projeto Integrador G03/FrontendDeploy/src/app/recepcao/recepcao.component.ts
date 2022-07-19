import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';
import { Produto } from '../model/Produto';
import { CategoriaService } from '../service/categoria.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-recepcao',
  templateUrl: './recepcao.component.html',
  styleUrls: ['./recepcao.component.css']
})
export class RecepcaoComponent implements OnInit {

  listaCategorias: Categoria[];
  listaProdutos: Produto[];
  listaFrutas: Produto[];

  // lista: Produto = new Produto() =
  // {
  //   descricao : aspargo Verdes,
  //   valor : 1.99,
  //   nome : "teste",
  //   foto : ""
    
  // }

      nomeProdutoBuscado: string;

      constructor(
        private router: Router,
        private produtoService: ProdutoService,
        private categoriaService: CategoriaService
      ) { }

  ngOnInit() {
        // environment.token = 'Basic c3VzdGVudGFAZW1haWwuY29tOjEyMzQ1Njc4';
        window.scroll(0, 0)

        // console.log(this.listaCategorias)
        // console.log(this.listaProdutos)
        this.findAllProdutos();
        // this.findByDescricao();
        this.findAllCategoria();
        // console.log(this.listaCategorias)
        // console.log(this.listaProdutos)

        // if (environment.token == '')
        //   this.router.navigate(['/entrar'])
      }


  // findByDescricao() {
  //       this.produtoService.getByDescricao('frutas frescos').subscribe((res: any[]) => {
  //         this.listaFrutas = res;
  //       })
  //     }

  findAllCategoria() {
        this.categoriaService.getAllCategorias().subscribe((resp: Categoria[]) => {
          this.listaCategorias = resp;
        })
      }
  findAllProdutos() {
        this.produtoService.getAllProdutos().subscribe((resp: Produto[]) => {
          this.listaProdutos = resp;
        })
      }

  
  goProducts() {
        this.router.navigate(['/produtos-buscados']);
      }



    }