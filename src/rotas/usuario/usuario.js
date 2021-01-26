module.exports = (app)=>{
    app.get("/usuario",(req,res)=>{
        app.src.controlles.controlles.usuario(app,req,res);
    })
}