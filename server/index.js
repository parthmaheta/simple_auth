const express=require("express")
const app=express()
const session=require('express-session')
let DB=require('./db/db.js')
DB.connect()
app.use(express.urlencoded({extended:true}))
app.use(session({secret:'Xf00',resave:true,saveUninitialized:true}))
app.use(require('./router/routes.js'))


app.listen(5000,()=>console.log('server is running'))