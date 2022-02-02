import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Postagem } from 'src/app/model/Postagem';
import { PostagemService } from 'src/app/service/postagem.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-postagem-delete',
  templateUrl: './postagem-delete.component.html',
  styleUrls: ['./postagem-delete.component.css'],
})
export class PostagemDeleteComponent implements OnInit {
  postagem: Postagem = new Postagem();
  idPostagem: number;

  constructor(
    private postagemService: PostagemService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    if (environment.token == '') {
      this.router.navigate(['/signIn']);
    }
    this.idPostagem = this.route.snapshot.params['id'];
    this.findByIdTema(this.idPostagem);
  }

  findByIdTema(id: number) {
    this.postagemService.getByIdPostagem(id).subscribe((resp: any) => {
      this.postagem = resp;
    });
  }
  apagar() {
    this.postagemService.deletePostagem(this.idPostagem).subscribe(() => {
      alert('Postagem apagada com sucesso!');
      this.router.navigate(['/feed']);
    });
  }
}
