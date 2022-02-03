import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { ModalModule } from 'ngx-bootstrap/modal';
import { OrderModule } from 'ngx-order-pipe';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { InicioComponent } from './inicio/inicio.component';
import { FeedComponent } from './feed/feed.component';
import { PerfilProfComponent } from './perfil-prof/perfil-prof.component';
import { PerfilAlunoComponent } from './perfil-aluno/perfil-aluno.component';
import { MateriasEditComponent } from './materias-edit/materias-edit.component';
import { ChatAlunoComponent } from './chat-aluno/chat-aluno.component';
import { ChatProfComponent } from './chat-prof/chat-prof.component';
import { MateriaEditComponent } from './edit/materia-edit/materia-edit.component';
import { MateriaDeleteComponent } from './delete/materia-delete/materia-delete.component';
import { PostagemEditComponent } from './edit/postagem-edit/postagem-edit.component';
import { PostagemDeleteComponent } from './edit/postagem-delete/postagem-delete.component';
import { AlertasComponent } from './alertas/alertas.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RodapeComponent,
    LoginComponent,
    CadastroComponent,
    InicioComponent,
    FeedComponent,
    PerfilProfComponent,
    PerfilAlunoComponent,
    MateriasEditComponent,
    ChatAlunoComponent,
    ChatProfComponent,
    MateriaEditComponent,
    MateriaDeleteComponent,
    PostagemEditComponent,
    PostagemDeleteComponent,
    AlertasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    ModalModule.forRoot(),
    OrderModule
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
