import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';
import { PostagemService } from '../service/postagem.service'; 

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  id = environment.id;
  perfil = environment.tipo;

  postagem: Postagem = new Postagem;
  listaPostagens: Postagem[];
  tituloPost: string;

  constructor(
    private router: Router,
    private postagemService: PostagemService,
  ) {}

  ngOnInit(
  ) {}

  sair() {
    this.router.navigate(['/initial']);
    environment.token = '';
    environment.nome = '';
    environment.foto = '';
    environment.id = 0;
    environment.tipo = '';
  }

  alunoProf() {
    if (this.perfil == 'adm') {
      this.router.navigate(['/perfilProf', this.id]);
    } else {
      this.router.navigate(['/perfilAluno', this.id]);
    }
  }

  getAllPostagem(){
    this.postagemService.getAllPostagem().subscribe((resp: Postagem[])=>{
      this.listaPostagens = resp
    })
  }

  findByTituloPostagem(){

    if(this.tituloPost == ''){
      this.getAllPostagem()
    } else {
      this.postagemService.getByTituloPostagem(this.tituloPost).subscribe((resp: Postagem[])=>{
        this.listaPostagens = resp
      })
    }
  }


}
