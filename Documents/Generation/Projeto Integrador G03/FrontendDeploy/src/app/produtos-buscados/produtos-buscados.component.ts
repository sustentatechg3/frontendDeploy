import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { AppComponent } from '../app.component';
import { Produto } from '../model/Produto';
import { CategoriaService } from '../service/categoria.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-produtos-buscados',
  templateUrl: './produtos-buscados.component.html',
  styleUrls: ['./produtos-buscados.component.css']
})
export class ProdutosBuscadosComponent implements OnInit {

  nomeProdutoBuscado: string;
  listaProdutosBuscados: Produto[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService,
    private app: AppComponent
  ) { }

  ngOnInit() {
    window.scroll(0, 0)

    if (environment.token == '')
      this.router.navigate(['/entrar'])

      // this.nomeProdutoBuscado = 'banana'
      this.nomeProdutoBuscado = this.route.snapshot.params['nome'];
      this.buscar(this.nomeProdutoBuscado);
      alert(this.nomeProdutoBuscado);
      
      this.listaProdutosBuscados.forEach(prod => {
        alert(prod.nome);
      });
  }



  buscar(nome: string){
    this.produtoService.getAllProdutosByNome(nome).subscribe((resp: Produto[]) => {
      resp.forEach(prod => {
        alert(prod.nome);
      });
      this.listaProdutosBuscados = resp;
    })
  }

}
