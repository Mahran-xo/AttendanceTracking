const {Router} =require('express');

const StudentsController = require('../controllers/Students');
const StudentValidator = require('../validators/Students');

const StudentsRouter=Router();

StudentsRouter.post('/',StudentValidator.validateStudents(),StudentsController.postStudent);
StudentsRouter.post('/AssignToModule/:id',StudentsController.AssignToModule);
StudentsRouter.post('/RemoveStudentFromModule/:id',StudentsController.RemoveStudentFromModule);
StudentsRouter.get('/RetrieveAllStudents',StudentsController.RetrieveAllStudents);
StudentsRouter.get('/:studentId',StudentsController.getStudent);

module.exports=StudentsRouter;