import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/model/Categoria';
import { Produto } from 'src/app/model/Produto';
import { AlertasService } from 'src/app/service/alertas.service';
import { ProdutoService } from 'src/app/service/produto.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-categoria-delete',
  templateUrl: './produto-delete.component.html',
  styleUrls: ['./produto-delete.component.css']
})
export class ProdutoDeleteComponent implements OnInit {

  produto: Produto = new Produto
  idProduto: number

  constructor(
    private produtoService: ProdutoService,
    private router: Router,
    private route: ActivatedRoute,
    private alertas: AlertasService
  ) { }

  ngOnInit() {
    if (environment.token == '') {
      this.alertas.showAlertDanger('Sua sessão expirou, faça o login novamente.');
      this.router.navigate(['/entrar']);
    }

    this.idProduto = this.route.snapshot.params['id'];
    this.findByIdCategoria(this.idProduto);
    // alert(this.produto.nome)
  }

  findByIdCategoria(id: number){
    this.produtoService.getByIdProduto(id).subscribe((resp: Produto) => {
      this.produto = resp
    })
    // alert(this.produto)
  }


apagar(){
  this.produtoService.deleteProduto(this.idProduto).subscribe(()=>{
    this.alertas.showAlertSuccess('Produto apagado com sucesso!')
    this.router.navigate(['/cadastrar-produto'])
  })
}
}