import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllCategorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>('https://sustentatech.herokuapp.com/categorias', this.token)
  }

  getByIdCategoria(id: number): Observable<Categoria>{
    return this.http.get<Categoria>(`https://sustentatech.herokuapp.com/categorias/${id}`, this.token)
  }

  getByDescricao(descricao: string): Observable<Categoria[]>{
    return this.http.get<Categoria[]>(`https://sustentatech.herokuapp.com/categorias/descricao/${descricao}`, this.token)
  }

  getByTipoCategoria(tipo: string): Observable<Categoria[]>{
    return this.http.get<Categoria[]>(`https://sustentatech.herokuapp.com/categorias/tipo/${tipo}`, this.token)
  }

  postCategoria(categoria: Categoria): Observable<Categoria> {
    return this.http.post<Categoria>('https://sustentatech.herokuapp.com/categorias', categoria, this.token)
  }

  putCategoria(categoria: Categoria): Observable<Categoria>{
    return this.http.put<Categoria>('https://sustentatech.herokuapp.com/categorias', categoria, this.token)
  }

  deleteCategoria(id: number) {
    return this.http.delete(`https://sustentatech.herokuapp.com/categorias/${id}`, this.token)
  }

  


}
