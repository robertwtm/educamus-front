import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { User } from '../model/User';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-perfil-aluno',
  templateUrl: './perfil-aluno.component.html',
  styleUrls: ['./perfil-aluno.component.css']
})
export class PerfilAlunoComponent implements OnInit {
  
  foto = environment.foto
  nome = environment.nome
  user: User = new User()
  idUser: number
  tipoUser: string
  confirmarSenha: string
  
  constructor(
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute,

  ) { }

  ngOnInit(){
    if(environment.token == '') {
      this.router.navigate(['/signUp'])
    }

    this.idUser = this.route.snapshot.params['id']
    this.findByIdUser(this.idUser)
  }

  atualizar(){
    this.user.tipo = this.tipoUser

    if(this.user.senha != this.confirmarSenha){
      alert('As senhas são diferentes.')
    }else{
      this.auth.cadastrar(this.user).subscribe((resp: User) =>{
        this.user = resp
        this.router.navigate(["/feed"])
        alert('Usuário atualizado com sucesso, faça o login novamente.')

        environment.token = ''
        environment.nome = ''
        environment.foto = ''
        environment.id = 0

        this.router.navigate(['/signIn'])
      })
    }
  }

 confirmSenha(event: any) {
   this.confirmarSenha = event.target.value
 }

  findByIdUser(id: number) {
    this.auth.getByIdUser(id).subscribe((resp: User)=>{
      this.user = resp
    })
  }

}
