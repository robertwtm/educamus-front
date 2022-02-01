import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { FeedComponent } from './feed/feed.component';
import { PerfilAlunoComponent } from './perfil-aluno/perfil-aluno.component';
import { PerfilProfComponent } from './perfil-prof/perfil-prof.component';
import { MateriasEditComponent } from './materias-edit/materias-edit.component';
import { ChatAlunoComponent } from './chat-aluno/chat-aluno.component';
import { ChatProfComponent } from './chat-prof/chat-prof.component';
import { MateriaDeleteComponent } from './delete/materia-delete/materia-delete.component';
import { MateriaEditComponent } from './edit/materia-edit/materia-edit.component';

const routes: Routes = [
  { path: '', redirectTo: 'initial', pathMatch: 'full' },
  { path: 'feed', component: FeedComponent },
  { path: 'signUp', component: CadastroComponent },
  { path: 'signIn', component: LoginComponent },
  { path: 'initial', component: InicioComponent },
  { path: 'perfilAluno/:id', component: PerfilAlunoComponent },
  { path: 'perfilProf/:id', component: PerfilProfComponent },
  { path: 'materiasEdit', component: MateriasEditComponent },
  { path: 'chatAluno', component: ChatAlunoComponent },
  { path: 'chatProf', component: ChatProfComponent },
  { path: 'materia-edit/:id', component: MateriaEditComponent},
  { path: 'materia-delete/:id', component: MateriaDeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
