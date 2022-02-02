import { Component, OnInit } from '@angular/core';
import { AlertasService } from '../service/alertas.service';

@Component({
  selector: 'app-chat-prof',
  templateUrl: './chat-prof.component.html',
  styleUrls: ['./chat-prof.component.css'],
})
export class ChatProfComponent implements OnInit {
  constructor(private alertas: AlertasService) {}

  ngOnInit(): void {
    this.alertas.showAlertInfo(
      'Olá prof , aqui você poderá enviar mensagens para seus alunos! , espere mais um pouquinho estamos desenvolvendo o melhor para você.'
    );
  }
}
