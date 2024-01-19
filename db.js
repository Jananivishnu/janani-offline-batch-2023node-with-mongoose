const{mongoclient} = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new Mongoclient(url);

const dbName ="TraineesDB";
let db = "";

async function dbconnection()  {
    await client.connect(); //to connect to the mongoDB server
    console.log("DB connection established...");
    db = client.db(dbName); // to make the Mongodb databaseas the active database
   return db; //returning the db connection back to function call
}

//async function getDB() {
    //  return db;
    // } 

    module.exports = { db connection};
    