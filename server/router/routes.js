const db=require('./../db/functions.js')
const routes=require('express').Router()

routes.post('/login',async (req,res)=>{
    result=await db.isExist(req.body.UID,req.body.PW)
    
     if(result)
      req.session.UID=req.body.UID
     
      res.send(result)

})

routes.post('/signup',async (req,res)=>{
    let isExist=await db.isExist(req.body.UID)
    
    if(!isExist)
     {   let result=await db.signUP(req.body.UID,req.body.PW)
          return res.send(result)  
    }
    else
      return res.send(false)        
    
})

routes.post('/logout',(req,res)=>{
    req.session.destroy(err=>{
        res.send(true)
    })

})
module.exports=routes