const express = require('express');

const App = express();
App.use(express.json());
const dotenv = require('dotenv');

dotenv.config({
    path:'./config/.env'
});
const port = process.env.port;

const initializeDBConnection=require('./config/db');
const StudentsRouter=require('./routes/Students');
const ModuleRouter=require('./routes/Modules');
const AttendanceRouter=require('./routes/AttendanceTracking');
const AbsenceRouter=require('./routes/AbsenceFormManagement');

App.use('/Students',StudentsRouter);
App.use('/Modules',ModuleRouter);
App.use('/Attendance',AttendanceRouter);
App.use('/Absence',AbsenceRouter);

App.listen(port,async()=>{

    console.log(`server has been started at port ${port}`);
    await initializeDBConnection();
}); //code necessary to start a web server using Express
