import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../model/Usuario';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { AlertasService } from 'src/app/service/alertas.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar-usuario.component.html',
  styleUrls: ['./cadastrar-usuario.component.css']
})
export class CadastrarComponent implements OnInit {

  usuario: Usuario = new Usuario()
  confirmarSenha: string
  tipoUsuario: string

  constructor(
    private authService: AuthService,
    private router: Router,
    private alertas: AlertasService
  ) { }

  ngOnInit() {
    window.scroll(0, 0)

  }
  confirmSenha(event: any) {
    this.confirmarSenha = event.target.value
  }
  // tipoUser(event: any) {
  //   this.tipoUsuario = event.target.value
  // }
  //
  
  cadastrar() {
    // alert('entrou no cadastrar')
    // this.usuario.usuario = this.tipoUsuario

    if (this.usuario.senha != this.confirmarSenha) {
      this.alertas.showAlertDanger("As senhas estão diferentes.")


    } else {
      // alert('entrou no else')

      if (this.usuario.foto == null)
        this.usuario.foto = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png'

       
      this.authService.cadastrar(this.usuario).subscribe((resp: Usuario) => {
      

        this.usuario = resp
        this.router.navigate(['/entrar'])
        this.alertas.showAlertSuccess("Usuário cadastrado com sucesso!")
      }, erro => {
        if(erro.status == 400){
          this.alertas.showAlertDanger('Revise os campos!')
        }
      }
      )
    }
  }

  tipo(event: any){
    this.tipoUsuario = event.target.value

  }




}