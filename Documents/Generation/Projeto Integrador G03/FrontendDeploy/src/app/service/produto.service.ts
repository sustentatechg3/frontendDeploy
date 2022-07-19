import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Produto } from '../model/Produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }
  // https://sustentatech.herokuapp.com/produtos
  getAllProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>('https://sustentatech.herokuapp.com/produtos/all', this.token)
  }

  getByIdProduto(id: number): Observable<Produto>{
    return this.http.get<Produto>(`https://sustentatech.herokuapp.com/produtos/${id}`, this.token)
  }

  getByNomeProduto(nome: string): Observable<Produto[]>{
    return this.http.get<Produto[]>(`https://sustentatech.herokuapp.com/produtos/nome/${nome}`, this.token)
  }


  getByDescricao(descricao: string): Observable<Produto[]>{
    return this.http.get<Produto[]>(`https://sustentatech.herokuapp.com/produtos/descricao/${descricao}`, this.token)
  }

  postProduto(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>('https://sustentatech.herokuapp.com/produtos', produto, this.token)
  }

  putProduto(produto: Produto): Observable<Produto>{
    return this.http.put<Produto>('https://sustentatech.herokuapp.com/produtos', produto, this.token)
  }

  deleteProduto(id: number) {
    return this.http.delete(`https://sustentatech.herokuapp.com/produtos/${id}`, this.token)
  }


  getAllProdutosByNome(nome: String): Observable<Produto[]>{
    return this.http.get<Produto[]>(`https://sustentatech.herokuapp.com/produtos/nome/${nome}`, this.token)
  }


  


}
