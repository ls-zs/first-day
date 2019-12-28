const arr=require("./public/mock/mock")
module.exports={
  devServer:{
    before(app){
        app.get("/list",(req,res)=>{
           res.json({
             list:arr
           })
        })
    }
  }
}