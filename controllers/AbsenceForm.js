const AbsenceService = require('../services/AbsenceFormManagement');

module.exports.postAbsence=async(req,res)=>{

    const AbsenceInfo={
        id:req.params.id,
        module:req.body.module,
        reason:req.body.reason
    };

    try{
        
        const abs = await AbsenceService.SubmitAbscenceForm(AbsenceInfo);
        console.log({AbsenceInfo});
        
        return res.status(201).send({
            msg:'successfully!'
        
        });
    }
    catch(err){

        return res.status(500).send({
            error:err.message
            });
    }

};

module.exports.RetrieveAbsenceForms=async(req,res)=>{
   
    try{
        const Absence = await AbsenceService.RetrieveAbsenceForms();
        return res.send({Absence});   
    }
    catch(err){

        return res.status(500).send({
            error:err
            });
    }


};
