const mongoClient = require('mongodb').MongoClient;
const URL = 'mongodb://127.0.0.1:27017';
let mongodb;

function connect(){
    mongoClient.connect(URL,{useUnifiedTopology:true}, (err, db) => {
      if(err)
      throw err
        mongodb = db.db('simple_auth');
      
    });
}
function get(){
    return mongodb;
}

function close(){
    mongodb.close();
}

module.exports = {
    connect,
    get,
    close
};