import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';

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
    ChatProfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
