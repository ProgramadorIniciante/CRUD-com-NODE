module.exports.admin = (app,req,res)=>{
    res.render("admin/admin.ejs");
}

module.exports.usuario = (app,req,res)=>{
    res.render("usuario/usuario.ejs");
}

module.exports.usuarios = (app,req,res)=>{
    
    const con = app.config.db();
    const models = new app.src.models.models(con);
    
    models.usuarios(function(err,result){
        if(!err){
            res.render("usuario/usuarios.ejs",{result:result});
        }else{
            console.log("ERRO NA CONSULTA")
        }
    });
}