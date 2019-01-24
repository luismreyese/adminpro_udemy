
export class Usuario {

    constructor( public nombre:   string,
                 public email:    string,
                 public password: string,
                 public img?:     string,
                 public google?:  boolean,
                 public role?:    string,
                 public _id?:     string,
                  ) { }
}

export class UsrTmp {
 constructor( public email:    string,
              public nombre:   string,
              public token:    string,
              public img?:     string,
              public role?:    string
             ) { }
}

