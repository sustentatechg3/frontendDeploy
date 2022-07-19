import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/model/Categoria';
import { AlertasService } from 'src/app/service/alertas.service';
import { CategoriaService } from 'src/app/service/categoria.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-cadastrar-categoria',
  templateUrl: './cadastrar-categoria.component.html',
  styleUrls: ['./cadastrar-categoria.component.css']
})
export class CadastrarCategoriaComponent implements OnInit {

  categoria: Categoria = new Categoria()
  listaCategorias: Categoria[]

  constructor(
    private router: Router,
    private categoriaService: CategoriaService,
    private alerta: AlertasService
  ){}

  ngOnInit() {
    window.scroll(0, 0)

    if (environment.token == '')
      this.router.navigate(['/entrar'])

    this.findAllCategorias()


  }

  findAllCategorias() {
    this.categoriaService.getAllCategorias().subscribe((resp: Categoria[]) => {
      this.listaCategorias = resp
    })
  }

  cadastrar() {
    this.categoriaService.postCategoria(this.categoria).subscribe((resp: Categoria) => {
      this.categoria = resp

       this.findAllCategorias()
       this.categoria= new Categoria
    })
    this.router.navigate(['/cadastrar-produto'])
    this.alerta.showAlertSuccess('Categoria cadastrada com sucesso!')


  }

  cadastrarCategoria(){
    this.categoriaService.postCategoria(this.categoria).subscribe((resp: Categoria) => {
      this.categoria = resp;
      this.alerta.showAlertSuccess('Categoria criada com sucesso!');
      this.findAllCategorias()
      this.categoria = new Categoria();
    });
  }
}