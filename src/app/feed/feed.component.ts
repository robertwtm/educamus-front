import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';
import { Tema } from '../model/Tema';
import { User } from '../model/User';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css'],
})
export class FeedComponent implements OnInit {
  nome = environment.nome;
  foto = environment.foto;
  idUser = environment.id;
  like: number;

  idTema: number;
  listTemas: Tema[];
  tema: Tema = new Tema();
  post: Postagem = new Postagem();
  postagem: Postagem[];
  user: User = new User();
  titulo: string;
  texto: string;
  key = 'data';
  reverse = true;

  constructor(
    private router: Router,
    private temaService: TemaService,
    private postagemService: PostagemService,
    private authService: AuthService,
    private alerta: AlertasService
  ) {}

  ngOnInit() {
    if (environment.token == '') {
      alert('Seu token expirou. Faça o login novamente!');
      this.router.navigate(['/signIn']);
    }
    this.like = 3;

    this.getallTemas();
    this.getAllPostagens();
  }

  addLike() {
    this.like++;
  }

  findByIdTema() {
    this.temaService.getByIdMateria(this.idTema).subscribe((resp: any) => {
      this.tema = resp;
    });
  }

  findByIdUser() {
    this.authService.getByIdUser(this.idUser).subscribe((resp: User) => {
      this.user = resp;
    });
  }

  getallTemas() {
    this.temaService.getAllMateria().subscribe((resp: Tema[]) => {
      this.listTemas = resp;
    });
  }

  getAllPostagens() {
    this.postagemService.getAllPostagem().subscribe((resp: Postagem[]) => {
      this.postagem = resp;
    });
  }

  verify(e: any) {}

  postar() {
    this.tema.id = this.idTema;
    this.post.tema = this.tema;
    this.user.id = this.idUser;
    this.post.usuario = this.user;

    console.log(this.post.usuario.id);
    console.log(this.post.tema.id);
    console.log(this.post.tema.descricao);
    console.log(this.post.tema);
    console.log(this.post.foto);
    console.log(this.post.texto);
    console.log(this.post.titulo);

    this.postagemService.postPostagem(this.post).subscribe((resp: Postagem) => {
      console.log(this.post);
      this.post = resp;
      this.alerta.showAlertSuccess('Postagem realizada com sucesso!');
      this.post = new Postagem();

      this.getAllPostagens();
    });
  }
}
