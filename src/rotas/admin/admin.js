const {validationResult,body} = require("express-validator")
module.exports = (app)=>{
    app.get("/admin",(req,res)=>{
        app.src.controlles.controlles.admin(app,req,res);
    })

    app.post("/req_cad",
    body('nome').isEmpty().withMessage("nome nao pode ser vazio"),(req,res)=>{
        const body = req.body;
        const con = app.config.db();
        const models = new app.src.models.models(con);
        
        const erros = validationResult(req);

        if(!erros.isEmpty()){
            console.log(erros);
        }else{
            console.log(erros)
        }
        
    })
}