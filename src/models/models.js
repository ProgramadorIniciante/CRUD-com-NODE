class CRUD{
    constructor(con){
        this._con = con
    }

    cadastrar(body,calbak){
        this._con.query("INSERT INTO funcionarios set ?",body,calbak);
    }

    usuarios(calbak){
        this._con.query("SELECT*FROM funcionarios",calbak)
    }

}

module.exports = ()=>{
    return CRUD;
}