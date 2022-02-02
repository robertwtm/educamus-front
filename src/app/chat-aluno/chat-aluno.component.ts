import { Component, OnInit } from '@angular/core';
import { AlertasService } from '../service/alertas.service';

@Component({
  selector: 'app-chat-aluno',
  templateUrl: './chat-aluno.component.html',
  styleUrls: ['./chat-aluno.component.css'],
})
export class ChatAlunoComponent implements OnInit {
  constructor(private alertas: AlertasService) {}

  ngOnInit(): void {
    this.alertas.showAlertInfo(
      'Olá Alune , aqui você poderá ver as mensagens de seus profs! , espere mais um pouquinho estamos desenvolvendo o melhor para você.'
    );
  }
}
