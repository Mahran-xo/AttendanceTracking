const AttendanceModel = require('../models/Attendance');
const StudentModel = require('../models/Student');
const ModuleModel = require('../models/Module');
const axios = require('axios');


module.exports.AddAttendanceSheet = async (AttendanceInfo) => {

    const Attendance = new AttendanceModel({
        lectureHall: AttendanceInfo.lectureHall
    });

    try {

        const Module = await ModuleModel.findById({ _id: AttendanceInfo.moduleId })
        Attendance.moduleCode = Module.moduleCode;
        Attendance.moduleName = Module.moduleName;
        Attendance.student = Module.student.map((studentElement) => {
            return {
                studentId: studentElement.studentId,
                isAttended: false
            }
        })
        Attendance.Date = new Date();
        const addedAttendance = await Attendance.save();
        return addedAttendance;

    }


    catch (error) {
        console.log(error);
        throw new Error('Could not register attendance');
    }


};

module.exports.AddAttendance = async (AttendanceInfo) => {

    const Attendance = {
        sheetId: AttendanceInfo.sheetId,
        studentIds: AttendanceInfo.studentIds
    };

    try {

        var addedAttendance = await AttendanceModel.findOne({ _id: Attendance.sheetId });
        arrAbsentStudents = [];
        addedAttendance.student.forEach((studentElement) => {
            if (Attendance.studentIds.includes(studentElement.studentId.toString())) {

                studentElement.isAttended = true;

            } else {

                arrAbsentStudents.push(studentElement.studentId.toString());

            }
        })

        var preUpdate = await ModuleModel.findOne({ moduleCode: addedAttendance.moduleCode });
        preUpdate.student.filter((studentElement) => {

            return arrAbsentStudents.includes(studentElement.studentId.toString())

        }).forEach(async (absentStudentElement) => {

            absentStudentElement.limit += 1;
            const sendWar = await StudentModel.findOne({ _id: absentStudentElement.studentId });

            jsonData = {
                "email": sendWar.email,
                "moduleCode": addedAttendance.moduleCode,
                "studentName": sendWar.name
            }

            if (absentStudentElement.limit == 2) {

                axios.post(process.env.WARNING, jsonData);

            } if (absentStudentElement.limit == 4) {
                axios.post(process.env.WARNING2, jsonData);
            }


        });

        addedAttendance.save();
        preUpdate.save();



        return addedAttendance;

    }


    catch (error) {
        console.log(error);
        throw new Error('Could not register attendance');
    }


};

module.exports.GenerateAttendanceReport = async () => {

    try {
        const Attendance = await AttendanceModel.find().populate();
        return Attendance

    }


    catch (error) {
        console.log(error);
        throw new Error('Could not retrive attendance report');
    }


};



//loop over and extract each value in an array node.js using .forEach()?













