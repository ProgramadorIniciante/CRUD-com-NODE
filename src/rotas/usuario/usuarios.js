module.exports = (app)=>{
    app.get("/usuarios",(req,res)=>{
        app.src.controlles.controlles.usuarios(app,req,res);
        
    })
}