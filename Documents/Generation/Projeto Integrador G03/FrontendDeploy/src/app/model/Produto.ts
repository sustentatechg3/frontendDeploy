import { Categoria } from "./Categoria"
import { Usuario } from "./Usuario"

export class Produto{
    public id: number
    public descricao: string
    public valor: number
    public nome: string
    public foto: string
    public categoria: Categoria
    public usuario: Usuario
    
    
}