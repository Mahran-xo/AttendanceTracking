const {Router} =require('express');

const AttendanceController = require('../controllers/AttendanceTracking');

const AttendanceRouter=Router();

AttendanceRouter.post('/',AttendanceController.postAttendance);
AttendanceRouter.get('/GenerateAttendance',AttendanceController.GenerateAttendance);
AttendanceRouter.post('/AddAttendance',AttendanceController.AddAttendance);

module.exports=AttendanceRouter;