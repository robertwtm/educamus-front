import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tema } from 'src/app/model/Tema';
import { AlertasService } from 'src/app/service/alertas.service';
import { TemaService } from 'src/app/service/tema.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-materia-edit',
  templateUrl: './materia-edit.component.html',
  styleUrls: ['./materia-edit.component.css'],
})
export class MateriaEditComponent implements OnInit {
  tema: Tema = new Tema();

  constructor(
    private temaService: TemaService,
    private router: Router,
    private route: ActivatedRoute,
    private alerta: AlertasService
  ) {}

  ngOnInit() {
    if (environment.token == '') {
      this.router.navigate(['/signIn']);
    }

    let id = this.route.snapshot.params['id'];
    this.findByIdMateria(id);
  }

  findByIdMateria(id: number) {
    this.temaService.getByIdMateria(id).subscribe((resp: Tema) => {
      this.tema = resp;
    });
  }

  atualizar() {
    this.temaService.putMateria(this.tema).subscribe((resp: Tema) => {
      this.tema = resp;
      this.alerta.showAlertSuccess('Tema atualizado com sucesso!');
      this.router.navigate(['/materiasEdit']);
    });
  }
}
