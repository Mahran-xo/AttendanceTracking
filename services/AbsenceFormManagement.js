const AttendanceModel = require('../models/Attendance');
const AbsenceModel = require('../models/AbsenceForm');
const ModuleModel = require('../models/Module');
const axios = require('axios');


module.exports.SubmitAbscenceForm = async (AbsenceForm) => {

    const ABS = new AbsenceModel({
        studentId: AbsenceForm.id,
        module:AbsenceForm.module,
        reason:AbsenceForm.reason
        
    });

    try {

        const ABSsaved = await ABS.save();
        return ABSsaved;

    }


    catch (error) {
        console.log(error);
        throw new Error('Abscence Form submitted');
    }


};

module.exports.RetrieveAbsenceForms=async()=>{

    try{
        const ABS = await AbsenceModel.find().populate('studentId');
        return ABS

        }
        
    
    catch(error){
        console.log(error);
        throw new Error('Could not Absence forms');
    }


};