const db=require('./../db/db.js')

async function isExist(UID,PW){
    let res;
    
    if(arguments.length==2)
    res=await db.get().collection('users').countDocuments({UID,PW})
    
    else if(arguments.length==1)
     res=await db.get().collection('users').countDocuments({UID})
     
     if(res===1)
          return true
     else    
          return false
       
    
}

async function signUP(UID,PW){
    let result=await db.get().collection('users').insertOne({UID,PW})
    if(result.insertedCount==1)
     return true
    else
     return false
}
module.exports={
    isExist,
    signUP
}