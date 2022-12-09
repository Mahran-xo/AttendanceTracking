const {Router} =require('express');

const StudentsController = require('../controllers/Students');
const StudentValidator = require('../validators/Students');

const StudentsRouter=Router();

StudentsRouter.post('/',StudentValidator.validateStudents(),StudentsController.postStudent);
StudentsRouter.post('/AssignToModule',StudentsController.AssignToModule);
StudentsRouter.post('/RemoveStudentFromModule',StudentsController.RemoveStudentFromModule);
StudentsRouter.get('/RetrieveAllStudents',StudentsController.RetrieveAllStudents);

module.exports=StudentsRouter;