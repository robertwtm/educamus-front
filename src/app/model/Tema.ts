import { Postagem } from "./Postagem"

export class Tema{
    public id: number
    public materia: string
    public descricao: string
    public postagem: Postagem[]
}