const {Router} =require('express');

const StudentsController = require('../controllers/Students');

const StudentsRouter=Router();

StudentsRouter.post('/',StudentsController.postStudent);

module.exports=StudentsRouter;