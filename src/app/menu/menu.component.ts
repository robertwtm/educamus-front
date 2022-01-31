import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {

  id = environment.id
  
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void { }

  sair(){
    this.router.navigate(['/initial'])
    environment.token = ''
    environment.nome = ''
    environment.foto = ''
    environment.id = 0
  }


}

