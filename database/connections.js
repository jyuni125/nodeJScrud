//import mysql
const mysql = require('mysql');


//database configuration
const dbConfig = {
    host:"localhost",
    user:"root",
    password:"Blackstar_12",
    port: 3306,
    database:"crud_db"
}

//create connections
const DB = mysql.createPool(dbConfig);


module.exports = (query)=>{
    //make this promise
    return new Promise((resolve,reject)=>{
         //testing connections of database
         DB.getConnection((error,connections)=>{
            if(error){
                reject(error);
            }else{
                connections.query(query,(error,result)=>{
                    if(error){
                    //    console.log("ERRRRORR");
                        reject(error);
                    }else{
                        resolve(result);
                    }
                 //need this to release the query
                 connections.release();
                })
            }
        })
    })
       

}