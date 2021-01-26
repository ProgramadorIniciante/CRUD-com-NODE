module.exports.admin = (app,req,res)=>{
    res.render("admin/admin.ejs");
}

module.exports.usuario = (app,req,res)=>{
    res.render("usuario/usuario.ejs");
}

module.exports.usuarios = (app,req,res)=>{
    res.render("usuario/usuarios.ejs");
}