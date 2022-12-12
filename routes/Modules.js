const {Router} =require('express');

const ModuleController = require('../controllers/Modules');

const ModuleRouter=Router();

ModuleRouter.post('/',ModuleController.postModule);
ModuleRouter.post('/RemoveModule',ModuleController.RemoveModule);
ModuleRouter.get('/RetrieveAllModule',ModuleController.RetrieveAllModule);
ModuleRouter.put('/moduleName', ModuleController.updateModule);


module.exports=ModuleRouter;





