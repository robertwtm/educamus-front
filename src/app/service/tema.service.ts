import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(private http: HttpClient) { }
    
  token = {
      headers: new HttpHeaders().set('Authorization', environment.token)
    }

    getAllMateria(): Observable<Tema[]>{
      return this.http.get<Tema[]>('https://app-educamus.herokuapp.com/temas', this.token)
    }
  
    getByIdMateria(id: number): Observable<Tema>{
      return this.http.get<Tema>(`https://app-educamus.herokuapp.com/temas/${id}`, this.token)
    }

    getByDescricaoMateria(descricao: string): Observable<Tema[]>{
    return this.http.get<Tema[]>(`https://app-educamus.herokuapp.com/temas/descricao/${descricao}` , this.token)
    }
  
    postMateria(tema: Tema): Observable<Tema>{
      return this.http.post<Tema>('https://app-educamus.herokuapp.com/temas', tema, this.token)
    }
  
    putMateria(tema: Tema): Observable<Tema>{
      return this.http.put<Tema>('https://app-educamus.herokuapp.com/temas', tema, this.token)
    }
  
    deleteMateria(id: number) {
      return this.http.delete(`https://app-educamus.herokuapp.com/temas/${id}`, this.token)
    }


}

