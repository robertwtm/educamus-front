import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-materias-edit',
  templateUrl: './materias-edit.component.html',
  styleUrls: ['./materias-edit.component.css']
})
export class MateriasEditComponent implements OnInit {

  tema: Tema = new Tema()
  listaTemas: Tema[]

  constructor(
    private router: Router,
    private temaService: TemaService
    ) { }

  ngOnInit() {
    if(environment.token == ''){
      alert('Sua seção, expirou. Faça o login novamente!')
      this.router.navigate(['/signIn'])
    }
  }

  findAllMaterias(){
    this.temaService.getAllMateria().subscribe((resp: Tema[]) => {
      this.listaTemas = resp
    })
  }

  cadastrar(){
    this.temaService.postMateria(this.tema).subscribe((resp: Tema)=>{
      this.tema = resp
      alert('Tema cadastrado com sucesso!')
      this.findAllMaterias()
      this.tema = new Tema()
    })
 }



}

