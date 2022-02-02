import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';
import { AlertasService } from '../service/alertas.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-materias-edit',
  templateUrl: './materias-edit.component.html',
  styleUrls: ['./materias-edit.component.css'],
})
export class MateriasEditComponent implements OnInit {
  tema: Tema = new Tema();
  listaTemas: Tema[];

  constructor(
    private router: Router,
    private temaService: TemaService,
    private alerta: AlertasService
  ) {}

  ngOnInit() {
    if (environment.token == '') {
      this.alerta.showAlertInfo('Sua seção, expirou. Faça o login novamente!');
      this.router.navigate(['/signIn']);
    }

    this.findAllMaterias();
  }

  findAllMaterias() {
    this.temaService.getAllMateria().subscribe((resp: Tema[]) => {
      this.listaTemas = resp;
    });
  }

  cadastrar() {
    this.temaService.postMateria(this.tema).subscribe((resp: Tema) => {
      this.tema = resp;
      this.alerta.showAlertSuccess('Tema cadastrado com sucesso!');
      this.findAllMaterias();
      this.tema = new Tema();
    });
  }
}
