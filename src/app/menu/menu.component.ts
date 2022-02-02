import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  id = environment.id;
  perfil = environment.tipo;

  constructor(private router: Router) {}

  ngOnInit() {}

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
}
