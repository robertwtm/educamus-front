import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { User } from '../model/User';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-perfil-prof',
  templateUrl: './perfil-prof.component.html',
  styleUrls: ['./perfil-prof.component.css'],
})
export class PerfilProfComponent implements OnInit {
  foto = environment.foto;
  nome = environment.nome;
  perfil = environment.tipo;
  user: User = new User();
  idUser: number;
  tipoUser: string;
  confirmarSenha: string;

  constructor(
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private alerta: AlertasService
  ) {}

  ngOnInit() {
    if (environment.token == '') {
      this.router.navigate(['/signIn']);
    }
    this.idUser = this.route.snapshot.params['id'];
    this.findByIdUser(this.idUser);
  }

  atualizar() {
    this.user.tipo = this.tipoUser;

    if (this.user.senha != this.confirmarSenha) {
      this.alerta.showAlertDanger('As senhas precisam ser iguais!');
    } else {
      this.auth.atualizar(this.user).subscribe((resp: User) => {
        this.user = resp;
        this.router.navigate(['/feed']);
        this.alerta.showAlertSuccess(
          'Usuário atualizado com sucesso, faça o login novamente.'
        );

        environment.token = '';
        environment.nome = '';
        environment.foto = '';
        environment.id = 0;

        this.router.navigate(['/signIn']);
      });
    }
  }

  confirmSenha(event: any) {
    this.confirmarSenha = event.target.value;
  }

  findByIdUser(id: number) {
    this.auth.getByIdUser(id).subscribe((resp: User) => {
      this.user = resp;
    });
  }
}
