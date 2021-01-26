module.exports = (app)=>{
    app.get("/admin",(req,res)=>{
        app.src.controlles.controlles.admin(app,req,res);
    })
}