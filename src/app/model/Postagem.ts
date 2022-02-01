import { Tema } from './Tema';
import { User } from './User';

export class Postagem {
  public id: number;
  public titulo: string;
  public data: Date;
  public foto: string;
  public descricao: string;
  public usuario: User;
  public tema: Tema;
}
