const express = require('express');
const cors = require('cors');
const App = express();
App.use(express.json());
const dotenv = require('dotenv');

dotenv.config({
    path:'./config/.env'
});
const port = process.env.port;

App.use(cors());

const initializeDBConnection=require('./config/db');
const StudentsRouter=require('./routes/Students');
const ModuleRouter=require('./routes/Modules');
const AttendanceRouter=require('./routes/AttendanceTracking');
const AbsenceRouter=require('./routes/AbsenceFormManagement');
const { application } = require('express');

App.use('/Students',StudentsRouter);
App.use('/Modules',ModuleRouter);
App.use('/Attendance',AttendanceRouter);
App.use('/Absence',AbsenceRouter);

App.listen(port,async()=>{

    console.log(`server has been started at port ${port}`);
    await initializeDBConnection();
}); //code necessary to start a web server using Express
