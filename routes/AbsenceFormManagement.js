const {Router} =require('express');

const AbsenceController = require('../controllers/AbsenceForm');

const AbsenceRouter=Router();

AbsenceRouter.post('/:id',AbsenceController.postAbsence);
AbsenceRouter.get('/RetrieveAbsenceForms',AbsenceController.RetrieveAbsenceForms);

module.exports=AbsenceRouter;