import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/model/Usuario';
import { AuthService } from 'src/app/service/auth.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-navbar-navegacao',
  templateUrl: './navbar-navegacao.component.html',
  styleUrls: ['./navbar-navegacao.component.css']
})

export class NavbarNavegacaoComponent implements OnInit {

  usuario: Usuario = new Usuario();
  idUsuario = environment.id;
  foto = environment.foto;
  nome = environment.nome;
  
  

  constructor(
    private router: Router,
    private authService: AuthService
    
  ) { }

  ngOnInit(): void {
    this.findByIdUsuario();
    this.validarFoto();
  }


  validarFoto() {

    if (environment.foto == '') {
      this.foto = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png'
    }
  }
  

  findByIdUsuario(){
    this.authService.getByIdUsuario(this.idUsuario).subscribe((resp: Usuario) => {
      this.usuario = resp
    })
  }

  sair() {
    
    environment.token = '';
    environment.nome = '';
    environment.foto = '';
    environment.id = 0;
    this.router.navigate(['/recepcao'])
  }

}
