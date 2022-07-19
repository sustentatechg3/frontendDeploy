import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/model/Categoria';
import { Produto } from 'src/app/model/Produto';
import { AlertasService } from 'src/app/service/alertas.service';
import { CategoriaService } from 'src/app/service/categoria.service';
import { ProdutoService } from 'src/app/service/produto.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-categoria-edit',
  templateUrl: './produto-edit.component.html',
  styleUrls: ['./produto-edit.component.css']
})
export class ProdutoEditComponent implements OnInit {

  produto: Produto = new Produto
  listaProdutos: Produto[]
  listaCategorias: Categoria[]
  idProduto: number
  categoria: Categoria = new Categoria
  idCategoria: number
  
 


  constructor(
    private produtoService: ProdutoService,
    private router: Router,
    private route: ActivatedRoute,
    private categoriaService: CategoriaService,
    private alertas: AlertasService


  ) { }



  ngOnInit() {

    if (environment.token == '') {
      alert('Sua sessão expirou, faça o login novamente.');
      this.router.navigate(['/entrar']);
    }
    let id = this.route.snapshot.params['id']
    this.findByIdProduto(id)
    this.findAllCategorias()
    this.findByIdCategoria()



  }

  findByIdProduto(id: number) {
    this.produtoService.getByIdProduto(id).subscribe((resp: Produto) => {
      this.produto = resp
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

  // getSelected(valueBd: number): string {
  //   return this.produto.categoria.id == valueBd ? ('value="' + valueBd + '" selected"') : ('value="' + valueBd + '"');
  // }
 


  atualizar() {
    this.categoria.id = this.idCategoria
    this.produto.categoria = this.categoria;
    this.produtoService.putProduto(this.produto).subscribe((resp: Produto) => {

      this.produto = resp
      this.alertas.showAlertSuccess('Produto atualizada')
      this.router.navigate(['/cadastrar-produto'])
    })

  }

}


