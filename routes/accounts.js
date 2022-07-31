//import express
const express = require('express');

//use express
const router = express.Router();

//routes of create
const createServices = require('../services/create');
const retriveServices = require('../services/retrive');
const updateServices = require('../services/update');
const deleteServices = require('../services/delete');



//create path and functions
//first param the last path, second the 2 params is request and response
//------------------------------CREATE-------------------------------------------
router.post('/create', async(req,res)=>{
    //use destructure to make an object to variables that we recieve from client
    const { username, password } = req.body;

    //use the routes of services
    const result = await createServices(username,password)

    //condition
    if(result){
        res
            .status(200)
            .send({
                status: result,
                message: "Sucessfully Created!"
            })
    }else{
        res
            .status(500)
            .send({
                status: result,
                message: "Not Created!"
            })
    }
});
//-------------------------------------------------------------------------------



//------------------------------RETRRIVE-------------------------------------------
router.get('/retrive', async(req,res)=>{
    //use destructure to make an object to variables that we recieve from client
    const { field } = req.query

    //use the routes of services
    const result = await retriveServices(field)
  
    //condition
    if(result){
        res
            .status(200)
            .send(result)
    }else{ 
        res
            .status(500)
            .send({
                status: result,
                message: "Not retrived!"
            })
    }
});
//-------------------------------------------------------------------------------


//------------------------------UPDATE-------------------------------------------
router.post('/update', async(req,res)=>{
    //use destructure to make an object to variables that we recieve from client
    const {id, username, password } = req.body;

    //use the routes of services
    const result = await updateServices(id,username,password)

    //condition
    if(result){
        res
            .status(200)
            .send({
                status: result,
                message: "Sucessfully Updated!"
            })
    }else{
        res
            .status(500)
            .send({
                status: result,
                message: "Not Updated!"
            })
    }
});
//-------------------------------------------------------------------------------



//------------------------------DELETE-------------------------------------------
router.post('/delete', async(req,res)=>{
    //use destructure to make an object to variables that we recieve from client
    const { id } = req.query;

    //use the routes of services
    const result = await deleteServices(id)

    //condition
    if(result){
        res
            .status(200)
            .send({
                status: result,
                message: "Sucessfully Deleted!"
            })
    }else{
        res
            .status(500)
            .send({
                status: result,
                message: "Not Deleted!"
            })
    }
});
//-------------------------------------------------------------------------------

//if we use expert.router() we need to exports this and make your functions work!!
module.exports = router;

