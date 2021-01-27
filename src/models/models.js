class CRUD{
    constructor(con){
        this._con = con
    }

    usuarios(calbak){
        this._con.query("SELECT*FROM funcionarios",calbak)
    }

}

module.exports = ()=>{
    return CRUD;
}