import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { CarrinhoComponent } from '../carrinho/carrinho.component';
import { Categoria } from '../model/Categoria';
import { Produto } from '../model/Produto';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';
import { CategoriaService } from '../service/categoria.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-produto-selecao',
  templateUrl: './produto-selecao.component.html',
  styleUrls: ['./produto-selecao.component.css']
})
export class ProdutoSelecaoComponent implements OnInit {

  produto: Produto = new Produto();
  categoria: Categoria = new Categoria();
  idProduto: number;
  listaProdutosSemelhantes: Produto[] = [];
  carrinho: CarrinhoComponent = new CarrinhoComponent;
  // carrinho: CarrinhoComponent = new CarrinhoComponent(this.auth);
  quantidade: number = 0;





  constructor(
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService,
    private alestas: AlertasService



  ) { }

  ngOnInit() {

    window.scroll(0, 0);

    if (environment.token == '')
      this.router.navigate(['/entrar']);

    let id = this.route.snapshot.params['id'];
    this.findByIdProduto(id);
    this.idProduto = id;
    // ProdutoSelecaoComponent.listaDeProdutos.push('ini');
    // this.carrinho.atualizaCopiaDaLista();

  }

  findByIdProduto(id: number) {
    this.produtoService.getByIdProduto(id).subscribe((resp: Produto) => {
      this.produto = resp;
    })

  }

  addAoCarrinho(id: number, quantidade: number) {
    // this.findByIdProduto(id);
    // let p = this.produto;
    for (let i = 0; i <= quantidade; i++) {
      CarrinhoComponent.listaDeProdutos.push(this.produto);
    }
    // this.carrinho.atualizaCopiaDaLista();
    if (quantidade + 1 > 0)
      this.alestas.showAlertSuccess(this.produto.nome + ' Adicionado(a)')
    // this.carrinho.ler();

  }


  // findByIdCategoria() {
  //   this.categoriaService.getByIdCategoria(this.idCategoria).subscribe((resp: Categoria) => {
  //     this.categoria = resp
  //   })
  // }

  // findAllCategorias() {
  //   this.categoriaService.getAllCategorias().subscribe((resp: Categoria[]) => {
  //     this.listaCategorias = resp
  //   })
  // }

  buscaProdutosSemelhanes() {
    this.produtoService.getAllProdutos().subscribe((lista: Produto[]) => {
      lista.forEach(prod => {
        if (prod.categoria.tipo == this.produto.categoria.tipo)
          this.listaProdutosSemelhantes.push(prod)
      });
    });


  }
}