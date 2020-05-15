const express=require("express")
const app=express()

app.get('/',(req,res)=>{
    res.send('Hellow Parth')
})
app.listen(8080,()=>console.log('server is running'))