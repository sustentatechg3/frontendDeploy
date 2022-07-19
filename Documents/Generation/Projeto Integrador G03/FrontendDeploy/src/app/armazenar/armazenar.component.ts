import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Produto } from '../model/Produto';
import { Usuario } from '../model/Usuario';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-armazenar',
  templateUrl: './armazenar.component.html',
  styleUrls: ['./armazenar.component.css']
})
export class ArmazenarComponent implements OnInit {
  

  // static listaDeProdutos: Produto[] = [];
  static listaDeProdutosComprados: Produto[] = [];
  lista2: Produto[] = [];
  valorTotal: number = 0;

  static alertas: AlertasService

  // usuario: Usuario;



  idUsuario = environment.id;
  usuario: Usuario = new Usuario();
  authService: AuthService;

  listaVendedores: Usuario[] = [];

  reduced: Usuario[] = [];

  // alerta: AlertasService;



  // static alestas: AlertasService 

  static showAlertSuccess(message: string) {
    this.alertas.showAlertSuccess(message);
}



  constructor(
    private alerta: AlertasService,
    private auth: AuthService,
    private route: ActivatedRoute,
    private router: Router

  ) { }

  // constructor(a: boolean)

  ngOnInit() {

    this.registraProdutosComprados()
    // if (environment.token == '')
      this.router.navigate(['/inicio'])
    // // this.findByIdUsuario();
    // // CarrinhoComponent.limpar();
    // this.lista2 = ArmazenarComponent.listaDeProdutos;

    // // alert('atualliza lista2')
    // this.atualizaCopiaDaLista();
    // // alert('ler lista2')
    // // this.ler();
    // this.valorTotalPagar();
    // this.buscaVendedoresProdutos()
  }

  // // findByIdUsuario() {
  // //   this.authService.getByIdUsuario(this.idUsuario).subscribe((resp: Usuario) => {
  // //     this.usuario = resp
  // //   })
  // // }


registraProdutosComprados(){
  this.usuario.produto = ArmazenarComponent.listaDeProdutosComprados;
}


  static limpar() {
    // CarrinhoComponent.listaDeProdutos.forEach(prods => {
    //   CarrinhoComponent.listaDeProdutos.pop(prods);
    // });
    ArmazenarComponent.listaDeProdutosComprados = [];

  }

  // ler() {
  //   this.atualizaCopiaDaLista();
  //   this.lista2.forEach(p => {
  //     this.alerta.showAlertSuccess(p.nome)
  //   });


  //   alert('sta list')
  //   ArmazenarComponent.listaDeProdutosComprados.forEach(p => {
  //     alert(p.nome)
  //   });
  // }

  atualizaCopiaDaLista() {
    this.lista2 = ArmazenarComponent.listaDeProdutosComprados;
  }

  removerProduto(posicao: number) {
    const posi = posicao;
    ArmazenarComponent.listaDeProdutosComprados.splice(posi)
    this.valorTotalPagar();
    this.atualizaCopiaDaLista();
    this.buscaVendedoresProdutos();
  }

  valorTotalPagar() {
    let valorProdutos = 0;
    this.lista2.forEach(prod => {

      valorProdutos += prod.valor;

    });
    this.valorTotal = valorProdutos;
  }

  // compraRealizada() {
  //   // this.lista2.forEach((prod: Produto)=>{
  //   //   alert(this.usuario.nome + ' comprou ' + prod.nome)
  //   //   this.usuario.produto.push(prod)
  //   // })
  //   ArmazenarComponent.limpar();
  //   this.atualizaCopiaDaLista();

  //   // this.usuario.pro
  //   // alert('limpar')
  //   this.alerta.showAlertSuccess('Compra realizada! \\n VocÊ acabou de contribuir para o crescimento de ONGs sustentáveis')

  // }

  buscaVendedoresProdutos() {
    // var reduced = [];

    this.lista2.forEach(prod => {
      this.listaVendedores.push(prod.usuario)
    });

    // filtrando vendedores repetidos
    this.listaVendedores.forEach((item) => {
      var duplicated = this.reduced.findIndex(redItem => {
        return item.usuario == redItem.usuario;
      }) > -1;

      if (!duplicated) {
        this.reduced.push(item);
      }
    });


  }

}
