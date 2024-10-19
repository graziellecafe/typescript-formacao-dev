class Curso { 
  public nome: string | undefined;
  private _id: number | undefined;

  constructor(id: number) {
    this._id = id; 
    if(id < 1) throw new Error ('Id inválido') 
  }
 
  get id() { 
    return this._id
  }
}

export {}